/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-06 16:53:20
 * @LastEditTime: 2022-09-26 15:47:41
 * @LastEditors: Gavin
 */


import http from "@/utils/request-api"
import type {BillTable,BillTableInfo} from '@/model/bill/types'

import type {Result,PageInfo,PageStruct} from "@/model/common/types"


export function getDetailById(params:{id:string|Number}) {
  return http.request<any,Result<BillTable>>({
    url:"bill/table",
    method:'GET',
    params,
    
  })
}
export function createItem(data:BillTableInfo) {

  delete data.id
  return http.request<any,Result<string>>({
    url:"bill/table",
    method:'POST',
    data,
    
  })
}
export function getTableListByUser(params:PageInfo) {

  return http.request<any,Result<PageStruct<BillTable[]>>>({
    url:"bill/GetTableListByUserId",
    method:'GET',   
    params
     
  })
}
export function updateItem(data:BillTable) {

  return http.request<any,Result<string>>({
    url:"bill/table",
    method:'PUT', 
    data   
  })
}



