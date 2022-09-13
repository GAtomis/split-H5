/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-14 12:33:15
 * @LastEditTime: 2022-09-13 11:09:46
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

}&RouteRecordRaw  