/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-02 15:21:07
 * @LastEditTime: 2023-06-13 23:00:15
 * @LastEditors: GAtomis 850680822@qq.com
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
    url:"user/getBaseInfo",
  })
}


export function createUserInfo(data:UserInfo) {
  return http.request<any,Result<string>>({
    url:"user/addUserInfo",
    method:"POST",
    data
  })
}
export function updateUserInfo(data:UserInfo) {
  return http.request<any,Result<string>>({
    url:"user/userInfo",
    method:"PUT",
    data
  })
}



//姓名检索
 export function getInfoListByName (data:{searchKey:string}) {
  return http.request<any,Result<UserInfo[]>>({
    url:"user/getInfoListByName",
    method:"POST",
    data
  })
}


