/*
 * @Description: 枚举
 * @Author: Gavin
 * @Date: 2022-09-06 14:55:02
 * @LastEditTime: 2022-09-16 13:48:34
 * @LastEditors: Gavin
 */
import type { RecrodType } from "@/model/enum/types"
import type {BillRecrod,BillTable} from "@/model/bill/types"
import type {UserInfo} from "@/model/user/types"
import type {RemovableRef} from "@vueuse/core"
export type EnumState ={
  recrodType:RecrodType[]
  

}
export type TempTableState ={
  billTable:BillTable
  

}
export type RouteState ={

  

}
export type UserState={
  token:RemovableRef<string>
  user:UserInfo
}


