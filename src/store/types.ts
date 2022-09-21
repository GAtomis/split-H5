/*
 * @Description: 枚举
 * @Author: Gavin
 * @Date: 2022-09-06 14:55:02
 * @LastEditTime: 2022-09-21 11:57:10
 * @LastEditors: Gavin
 */
import type { RecordType,GenderType} from "@/model/enum/types"
import type {BillRecord,BillTable} from "@/model/bill/types"
import type {UserInfo} from "@/model/user/types"
import type {RemovableRef} from "@vueuse/core"

import type {RouteLocationNormalized} from "vue-router"

export type EnumState ={
  recordType:RecordType[]
  gender:GenderType
  

}
export type TempTableState ={
  billTable:BillTable,
  billRecord:BillRecord|{}
}
export type RouteState ={

  to:unknown
  from:unknown

}
export type UserState={
  token:RemovableRef<string>
  user:UserInfo
}


