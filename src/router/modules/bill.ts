/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-09-08 12:07:06
 * @LastEditTime: 2022-09-24 17:21:58
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
        component: () => import('@/views/BillTable/BillTable.vue'),
        meta: {
          title: '账单信息',
          icon: 'wap-home-o',
          roles: '/bill/billTable',
          cache:false,
          type:'link'
        },
      }, 
      {
        path: 'billForm',
        name: 'BillForm',
        component: () => import('@/views/BillForm/BillForm.vue'),
        meta: {
          title: 'table编辑',
          icon: 'wap-home-o',
          roles: '/bill/BillForm',
          cache:false,
          type:'link'
        },
      }, 
      {
        path: 'BillRecord',
        name: 'BillRecord',
        component: () => import('@/views/BillRecord/BillRecord.vue'),
        meta: {
          title: '账单记录',
          icon: 'wap-home-o',
          roles: '/bill/billRecord',
          type:'link',
          cache:false,
        },
      }, 
    
    ],
  },
]

export default mixinRouter
