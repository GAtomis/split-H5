/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-17 00:33:23
 * @LastEditTime: 2022-09-26 15:47:55
 * @LastEditors: Gavin
 */
export type Result <T>={
  result:T //指定类型
  code:number,
  msg:string
}
export type PrimaryKey ={
  id:string|number
}


export type PageInfo = {
  page: number
  pageSize: number
}

export type PageStruct<T> = {
  item: T
  total: number
}