/*
 * @Description: 路由守卫
 * @Author: Gavin
 * @Date: 2021-07-21 09:53:05
 * @LastEditTime: 2023-06-24 17:43:28
 * @LastEditors: GAtomis 850680822@qq.com
 */
import {
  Router,
  RouteLocationNormalized,
  NavigationGuardNext,
} from 'vue-router'
import { ExpandRouteRecordRaw } from '@/model/router'
import {useTitle} from '@vueuse/core'

import {useUser,useRouteStore} from "@/store/pinia"
import { showLoadingToast } from 'vant';
// import store from '@/store'
// const userStore=useUser()


//白名单
const whitelist: Array<string> = ['Login', 'Error', '404','Register',"Guide"] // no redirect whitelist

/**
 * @description: 是否在路由白名单内
 * @param {*} routerName 当前路由名
 * @return {*}
 * @Date: 2022-08-16 23:37:36
 */
const  hasWhiteList=(routerName:string):boolean=> whitelist.includes(routerName)

/**
 * @description: 是否有token
 * @param {*} boolean
 * @return {*}
 * @Date: 2022-08-18 18:55:20
 */
const  hasToken =():boolean=> !!useUser().sys_token

/**
 * @description: 是否登陆并已获得信息
 * @param {*} boolean
 * @return {*}
 * @Date: 2022-08-18 18:55:37
 */
const  isLogin= ():boolean=> !!useUser().sys_user.ID

export function createGuardHook(router: Router): void {
  router.beforeEach(

   
    
     async (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
      // return true
      
          if(hasWhiteList(to.name as string)){

              return true

          }
          if(hasToken()&&isLogin()){
            return true
          }else if (hasToken()){
              try {
                await useUser().getUserInfo()
                return true
                
              } catch (error:any) {
                    if(error?.code&&error.code==44){
                      return {
                        name: 'Guide',
                        query: { redirect: to.fullPath },
                        replace: true,
                      }
                    }
                      
              }  
          // 自动登录
          }
          showLoadingToast({
            message: '加载中...',
            forbidClick: true,
          });
          return  {
            name: 'Login',
            query: { redirect: to.fullPath },
            replace: true,
          }


    
    }
  )
  router.afterEach(
    (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
      useRouteStore().updateRouteRecord(to,from)
          
      const title = useTitle()
      title.value=to.meta.title as string
    }
  )
}
