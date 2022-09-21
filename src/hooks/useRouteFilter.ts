/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-20 15:45:38
 * @LastEditTime: 2022-09-20 16:47:10
 * @LastEditors: Gavin
 */
/**
 * 筛选子路由数据
 * @param routes asyncRoutes
 * @param roles
 */

 import type { ExpandRouteRecordRaw } from '@/model/router'


 export function filterChildren(
  routes: Array<ExpandRouteRecordRaw>,
  cb: (route:ExpandRouteRecordRaw)=>boolean
): Array<ExpandRouteRecordRaw> {
  // 关键筛选  第一个参数所有拥有的所有路由权限，第二参数权限路由
  // res是筛选完的路由
  let res: Array<ExpandRouteRecordRaw> = []
  // 所有异步路由遍历
  routes.forEach((route) => {
    // 解构
    const tmp = { ...route }
    let result
    // 当前路由组是否包含roles
    if (tmp.children) {
      result = filterChildren(tmp.children, cb)
      res = [...res, ...result]
    } else {
      if (hasPermission(tmp,cb)) {
        res.push(tmp)
      }
    }
  })

  return res
}

function hasPermission(
  route: ExpandRouteRecordRaw | any,
  cb: (route:ExpandRouteRecordRaw)=>boolean
): boolean {
  return cb(route)
}
