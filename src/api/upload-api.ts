/*
 * @Description: 上传
 * @Author: Gavin
 * @Date: 2022-09-07 17:53:21
 * @LastEditTime: 2022-09-09 17:37:18
 * @LastEditors: Gavin
 */
import http from "@/utils/request-api"

import type {Result} from "@/model/common/types"
import  type {UploadRes} from '@/model/upload/types'

type SMUser={
  username:string
  password:string
}
type Token={

  token:string


}
export function getToken(data:SMUser={username:'2396005050',password:'zn123456'}) {
  return http.request<any,Result<Token>>({
    baseURL:'upload',
    url:'token',  
    method:'POST',
    data
    
  })
}

export function upload(formData:FormData) {
  return http.request<any,UploadRes>({
    baseURL:'upload',
    url:'upload',  
    method:'POST',
    transformRequest:()=>formData,
    headers:{"Content-Type":"multipart/form-data", "Authorization": "DelSoXWWjXFCJ6Z7G1lhWxvAO1xYlb7h"}, 
  })
  
}