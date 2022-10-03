/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-06 16:53:20
 * @LastEditTime: 2022-10-03 14:15:34
 * @LastEditors: Gavin
 */


import http from "@/utils/request-api"
import type {BillRecord} from '@/model/bill/types'
import type {Result,PrimaryKey,PageInfo,PageStruct} from "@/model/common/types"





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
export function getList(data:{tableId:string
  creatorId:string
},params:PageInfo) {
  return http.request<any,Result<PageStruct<BillRecord[]>>>({
    url:"bill/record/list",
    method:'POST',
    data, 
    params
  })
}