/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-24 12:12:28
 * @LastEditTime: 2023-06-13 18:55:41
 * @LastEditors: GAtomis 850680822@qq.com
 */
import http from "@/utils/request-api"

import type {Result} from "@/model/common/types"

export function getUUID() {
  return http.request<any,Result<string>>({
    url:"base/getUUID",
    method:"GET",

  })
}



// @Summary 获取验证码
// @Produce  application/json
// @Param data body {username:"string",password:"string"}
// @Router /base/captcha [post]
export const captcha = (data) => {
  return http({
    url: 'base/captcha',
    method: 'post',
    data: data
  })
}

