/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-14 16:19:54
 * @LastEditTime: 2022-08-14 17:41:15
 * @LastEditors: Gavin
 */
import { ExpandRouteRecordRaw } from '@/model/router'

const mixinRouter: Array<ExpandRouteRecordRaw> = [


  {
    path: '/login',
    component: ()=>import("@/views/Login/Login.vue"),
    name: 'Login',
    meta: {
      title: 'layout',
      icon: 'icon-CodeSandbox',
      roles: '/layout',
    }

  }
]
export default mixinRouter