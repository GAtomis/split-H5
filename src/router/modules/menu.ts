/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-09-08 12:07:06
 * @LastEditTime: 2022-08-14 16:05:24
 * @LastEditors: Gavin
 */
 
/** When your routing table is too long, you can split it into small modules **/
const Layout = () => import('@/layout/index.vue')
import { ExpandRouteRecordRaw } from '@/model/router'

const mixinRouter: Array<ExpandRouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'Layout',
    meta: {
      title: 'layout',
      icon: 'icon-CodeSandbox',
      roles: '/layout',
    },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home/Home.vue'),
        meta: {
          title: 'home',
          icon: 'icon-codepen',
          roles: '/home',
        },
      },
    
    ],
  },
]

export default mixinRouter
