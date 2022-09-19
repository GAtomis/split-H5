/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-13 23:21:42
 * @LastEditTime: 2022-09-19 15:38:45
 * @LastEditors: Gavin
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
