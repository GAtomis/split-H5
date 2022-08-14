/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-14 12:33:15
 * @LastEditTime: 2022-08-14 23:10:27
 * @LastEditors: Gavin
 */



import type { RouteRecordRaw } from 'vue-router'
export type ExpandRouteRecordRaw= {

  children?:ExpandRouteRecordRaw[]

}&RouteRecordRaw  