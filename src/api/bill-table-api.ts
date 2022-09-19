/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-06 16:53:20
 * @LastEditTime: 2022-09-18 00:28:43
 * @LastEditors: Gavin
 */


import http from "@/utils/request-api"
import type {BillTable} from '@/model/bill/types'
import type {Result} from "@/model/common/types"


export function getDetailById(params:{id:string|Number}) {
  return http.request<any,Result<BillTable>>({
    url:"bill/table",
    method:'GET',
    params,
    
  })
}
export function createItem(data:BillTable) {

  delete data.id
  return http.request<any,Result<BillTable>>({
    url:"bill/table",
    method:'POST',
    data,
    
  })
}
export function getTableListByUser() {

  return http.request<any,Result<BillTable[]>>({
    url:"bill/GetTableListByUserId",
    method:'GET',    
  })
}
