/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-14 12:33:15
 * @LastEditTime: 2022-09-22 15:57:59
 * @LastEditors: Gavin
 */



import type { RouteRecordRaw } from 'vue-router'
export type ExpandRouteRecordRaw= {

  children?:ExpandRouteRecordRaw[]
  meta:{
    title: string
    icon: string,
    roles: string,
    cache?:boolean,
    type?:'link'|'menu'
  }
  [key: string]: any

}&RouteRecordRaw  