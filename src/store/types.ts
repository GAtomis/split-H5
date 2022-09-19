/*
 * @Description: 枚举
 * @Author: Gavin
 * @Date: 2022-09-06 14:55:02
 * @LastEditTime: 2022-09-19 16:18:54
 * @LastEditors: Gavin
 */
import type { RecrodType,GenderType} from "@/model/enum/types"
import type {BillRecrod,BillTable} from "@/model/bill/types"
import type {UserInfo} from "@/model/user/types"
import type {RemovableRef} from "@vueuse/core"

export type EnumState ={
  recrodType:RecrodType[]
  gender:GenderType
  

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


