/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-09-08 12:07:06
 * @LastEditTime: 2022-09-16 11:17:04
 * @LastEditors: Gavin
 */
 
/** When your routing table is too long, you can split it into small modules **/

import { ExpandRouteRecordRaw } from '@/model/router'

const mixinRouter: Array<ExpandRouteRecordRaw> = [
  {
    path: '/guide',
    component: () => import('@/views/Guide/Guide.vue'),
    name: 'Guide',
    meta: {
      title: 'Guide',
      icon: 'Guide',
      roles: '/guide',
    }

  }
]

export default mixinRouter
