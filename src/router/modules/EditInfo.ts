
/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-09-08 12:07:06
 * @LastEditTime: 2022-09-24 23:15:41
 * @LastEditors: Gavin
 */
 
/** When your routing table is too long, you can split it into small modules **/

import { ExpandRouteRecordRaw } from '@/model/router'
const Layout = () => import('@/layout/index.vue')
const mixinRouter: Array<ExpandRouteRecordRaw> = [


  {
    path: '/system',
    component: Layout,
    redirect: '/system/editInfo',
    name: 'System',
    meta: {
      title: 'system',
      icon: 'icon-CodeSandbox',
      roles: '/system',
    },
    children: [
      {
        path: 'editInfo',
        component: () => import('@/views/EditInfo/EditInfo.vue'),
        name: 'EditInfo',
        meta: {
          title: 'EditInfo',
          icon: 'EditInfo',
          roles: '/editInfo',
          type:'link'
        }
    
      }
    ],

  }
 
]

export default mixinRouter
