/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-06 16:53:20
 * @LastEditTime: 2023-06-17 11:28:11
 * @LastEditors: GAtomis 850680822@qq.com
 */


import http from "@/utils/request-api"
import type {BillTable,BillTableInfo} from '@/model/bill/types'

import type {Result,PageInfo,PageStruct} from "@/model/common/types"


export function getDetailById(params:{ID:string|Number}) {
  return http.request<any,Result<BillTable>>({
    url:"bilTable/findSysBilTable",
    method:'GET',
    params,
    
  })
}
export function createItem(data:BillTableInfo) {

  delete data.id
  return http.request<any,Result<string>>({
    url:"bilTable/createSysBilTable",
    method:'POST',
    data,
    
  })
}
export function getTableListByUser(params:PageInfo) {
  return http.request<any,Result<PageStruct<BillTable[]>>>({
    url:"bilTable/getOwnBilTableList",
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



