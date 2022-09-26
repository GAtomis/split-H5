/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-06 16:53:20
 * @LastEditTime: 2022-09-24 22:16:43
 * @LastEditors: Gavin
 */


import http from "@/utils/request-api"
import type {BillRecord} from '@/model/bill/types'
import type {Result,PrimaryKey} from "@/model/common/types"




export function createItem(data:BillRecord) {
  return http.request<any,Result<string>>({
    url:"bill/record",
    method:'POST',
    data, 
  })
}
export function updateItem(data:BillRecord) {
  return http.request<any,Result<string>>({
    url:"bill/record",
    method:'PUT',
    data, 
  })
}
export function DeleteItem(data:PrimaryKey) {
  return http.request<any,Result<string>>({
    url:"bill/record",
    method:'DELETE',
    data, 
  })
}