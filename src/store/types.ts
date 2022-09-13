/*
 * @Description: 枚举
 * @Author: Gavin
 * @Date: 2022-09-06 14:55:02
 * @LastEditTime: 2022-09-13 14:12:28
 * @LastEditors: Gavin
 */
import type { RecrodType } from "@/model/enum/types"
import type {BillRecrod,BillTable} from "@/model/bill/types"
import type {User} from "@/model/user/types"
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
  user:User
}


