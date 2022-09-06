/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-02 15:21:07
 * @LastEditTime: 2022-08-24 11:10:59
 * @LastEditors: Gavin
 */


import http from "@/utils/request-api"
import type {Login,Register,User}from "@/model/user/types"
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
  return http.request<any,Result<User>>({
    url:"user/getUserInfo",
  })
}
export function getUserList() {
  return http.request<any,Result<User[]>>({
    url:"user/list",
  })
}
