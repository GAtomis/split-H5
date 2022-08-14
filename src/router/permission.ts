/*
 * @Description: 路由守卫
 * @Author: Gavin
 * @Date: 2021-07-21 09:53:05
 * @LastEditTime: 2022-08-14 15:58:39
 * @LastEditors: Gavin
 */
import {
  Router,
  RouteLocationNormalized,
  NavigationGuardNext,
} from 'vue-router'
import { ExpandRouteRecordRaw } from '@/model/router'
// import store from '@/store'



//白名单
const whitelist: Array<string> = ['Login', 'Error', '404'] // no redirect whitelist

export function createGuardHook(router: Router): void {
  router.beforeEach(
    async (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
      // console.log("Hook开始", to);

    
    }
  )
  router.afterEach(
    (to: RouteLocationNormalized, from: RouteLocationNormalized) => {

    }
  )
}
