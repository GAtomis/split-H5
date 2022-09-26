/*
 * @Description: 枚举类型
 * @Author: Gavin
 * @Date: 2022-09-06 14:50:00
 * @LastEditTime: 2022-09-24 22:16:50
 * @LastEditors: Gavin
 */
export  type RecordType={
  title:string
  icon:string
  label:string
  type:number
}

export type  GenderType={
  
  [key: string|number]: "男"|"女"

}

export type ExistingEnum ={
  label:string,
  value:number

}

export type Theme ='light'|'dark'