/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-09-08 12:07:06
 * @LastEditTime: 2022-09-06 14:42:40
 * @LastEditors: Gavin
 */
 
/** When your routing table is too long, you can split it into small modules **/
const Layout = () => import('@/layout/index.vue')
import { ExpandRouteRecordRaw } from '@/model/router'

const mixinRouter: Array<ExpandRouteRecordRaw> = [
  {
    path: '/bill',
    component: Layout,
    redirect: '/bill/billTable',
    name: 'Bill',
    meta: {
      title: 'bill',
      icon: 'icon-CodeSandbox',
      roles: '/bill',
    },
    children: [
      {
        path: 'billTable',
        name: 'BillTable',
        component: () => import('@/views/Bill/BillTable.vue'),
        meta: {
          title: '首页',
          icon: 'wap-home-o',
          roles: '/bill/billTable',
          type:'link'
        },
      }, 
      {
        path: 'billRecord',
        name: 'BillRecord',
        component: () => import('@/views/Bill/BillRecord.vue'),
        meta: {
          title: '账单记录',
          icon: 'wap-home-o',
          roles: '/bill/billRecord',
          type:'link'
        },
      }, 
    
    ],
  },
]

export default mixinRouter
