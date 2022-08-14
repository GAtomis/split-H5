/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-09-08 12:07:06
 * @LastEditTime: 2022-08-14 23:17:22
 * @LastEditors: Gavin
 */
 
/** When your routing table is too long, you can split it into small modules **/
const Layout = () => import('@/layout/index.vue')
import { ExpandRouteRecordRaw } from '@/model/router'

const mixinRouter: Array<ExpandRouteRecordRaw> = [
  {
    path: '/layout',
    component: Layout,
    redirect: '/layout/home',
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
          title: '首页',
          icon: 'icon-codepen',
          roles: '/home',
          type:'menu'
        },
      },
      {
        path: 'operate',
        name: 'Operate',
        component: () => import('@/views/Home/Home.vue'),
        meta: {
          title: '运营',
          icon: 'icon-codepen',
          roles: '/operate',
          type:'menu'
        },
      },
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/Home/Home.vue'),
        meta: {
          title: '我的',
          icon: 'icon-codepen',
          roles: '/layout/user',
          type:'menu'
        },
      },
    
    ],
  },
]

export default mixinRouter
