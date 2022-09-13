/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-06 16:53:20
 * @LastEditTime: 2022-09-13 13:38:03
 * @LastEditors: Gavin
 */


import http from "@/utils/request-api"
import type {BillTable} from '@/model/bill/types'
import type {Result} from "@/model/common/types"


export function getDetailById(params:{id:number}) {
  return http.request<any,Result<BillTable>>({
    url:"user/user",
    method:'GET',
    params,
    
  })
}
