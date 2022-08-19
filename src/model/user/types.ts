/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-17 00:06:03
 * @LastEditTime: 2022-08-18 18:52:11
 * @LastEditors: Gavin
 */

import type {RemovableRef} from "@vueuse/core"
export type User = {
  avatar: string
  id?: string
  username: string
  name: string
  gender: boolean
  [key: string]: any

}
export type Login = {
  username: string,//用户名
  password: string,//密码
  code?: string//验证码
}

export type Register={
  username:string,//用户名
  password:string,//密码
  name:string,//昵称
  code?:string//验证码


}
export type UserState={
  token:RemovableRef<string>
  user:User
}


