/*
 * @Description: 路由核心 所有翻译均为机翻 勿6
 * @Author: Gavin
 * @Date: 2021-06-29 16:03:25
 * @LastEditTime: 2022-08-14 16:44:40
 * @LastEditors: Gavin
 */

import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'
import { createGuardHook } from './permission'
// import redirect from './redirect'
// import nested from './modules/nested'
// import account from './modules/account'
// import constructor from './modules/constructor'
import {allModules,getModel} from './modules'
import type { ExpandRouteRecordRaw } from '@/model/router'

const layout = () => import('@/layout/index.vue')

//公共的路由表  Public
export const publicRouteTable: Array<ExpandRouteRecordRaw> = [
  /*  meta-api
 
             title: 'Read', // menu name
             icon: 'icon-IE',// menu icon
              hidden: true,// display yes or not
             affix: false, // tagsView fixed header
             roles: "/readme/read", //backed async router
             only:true  // no menuGroup  only page  
             sortIndex: sort
             keepAlive:true
  */
      ...getModel()
  
]

//按需加载路由表  Load routes according to permissions. This attribute is private
export const privateRouteTable: Array<ExpandRouteRecordRaw> = [
  // ...nested,
  // ...account,
  // ...constructor,
  // ...modules,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRouteTable,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export function setupRouter(app: App) {

  console.log(allModules,getModel());
  
  app.use(router)
  // 创建路由守卫 loading guard hook
  createGuardHook(router)
  // console.log(modules);
}

export default router
