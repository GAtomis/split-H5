/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-17 00:06:03
 * @LastEditTime: 2022-09-16 13:51:01
 * @LastEditors: Gavin
 */


export type User = {
  avatar: string
  id?: number
  username: string
  name: string
  gender: number
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
  code?:string//验证码
}

export type UserInfo = {
  avatar: string
  id?: number|string
  name: string
  gender: number
  [key: string]: any
}