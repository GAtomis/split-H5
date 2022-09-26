/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-24 12:12:28
 * @LastEditTime: 2022-09-24 12:13:01
 * @LastEditors: Gavin
 */
import http from "@/utils/request-api"

import type {Result} from "@/model/common/types"

export function getUUID() {
  return http.request<any,Result<string>>({
    url:"base/getUUID",
    method:"GET",

  })
}


