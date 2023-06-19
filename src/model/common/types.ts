/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-17 00:33:23
 * @LastEditTime: 2023-06-19 13:20:18
 * @LastEditors: GAtomis 850680822@qq.com
 */
export type Result <T>={
  data:T //指定类型
  code:number,
  msg:string
}
export type PrimaryKey ={
  ID?:string|number
}


export type PageInfo = {
  page: number
  pageSize: number
}

export type PageStruct<T> = {
  page:number
  pageSize:number
  list: T
  total: number
}
