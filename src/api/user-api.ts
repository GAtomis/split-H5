/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-02 15:21:07
 * @LastEditTime: 2022-09-16 15:00:06
 * @LastEditors: Gavin
 */


import http from "@/utils/request-api"
import type {Login,Register,UserInfo}from "@/model/user/types"
import type {Result} from "@/model/common/types"

export function login(data:Login) {
  return http.request<any,Result<{token:string}>>({
    url:"/base/login",
    method:"POST",
    data
  })
}
export function register(data:Register) {
  return http.request<any,Result<string>>({
    url:"base/register",
    method:"POST",
    data
  })
}
export function getUserInfo() {
  return http.request<any,Result<UserInfo>>({
    url:"user/userInfo",
  })
}
export function createUserInfo(data:UserInfo) {
  return http.request<any,Result<string>>({
    url:"user/addUserInfo",
    method:"POST",
    data
  })
}
export function getUserList() {
  return http.request<any,Result<UserInfo[]>>({
    url:"user/list",
  })
}
