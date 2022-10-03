/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-14 16:19:54
 * @LastEditTime: 2022-10-03 16:49:48
 * @LastEditors: Gavin
 */
import { ExpandRouteRecordRaw } from '@/model/router'

const mixinRouter: Array<ExpandRouteRecordRaw> = [


  {
    path: '/',
    component: () => import("@/views/Login/index.vue"),
    name: 'Front',
    redirect: "/login",
    meta: {
      title: 'Front',
      icon: 'icon-CodeSandbox',
      roles: '/front',
    },
    children: [
      {
        path: '/login',
        component: () => import("@/views/Login/components/Login.vue"),
        name: 'Login',
        meta: {
          title: 'Login',
          icon: 'icon-CodeSandbox',
          roles: '/login',
        },

      },
      {
        path: '/register',
        component: () => import("@/views/Login/components/Register.vue"),
        name: 'Register',
        meta: {
          title: 'Register',
          icon: 'icon-CodeSandbox',
          roles: '/register',
        },

      }
   
      
    ]

  }
]
export default mixinRouter