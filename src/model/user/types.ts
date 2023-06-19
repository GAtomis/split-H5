/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-17 00:06:03
 * @LastEditTime: 2023-06-14 10:24:32
 * @LastEditors: GAtomis 850680822@qq.com
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
  ID: number
  phone: string
  email: string
  headerImg: string
  uuid: string
  userName: string
  nickName: string
  [key: string]: any
}