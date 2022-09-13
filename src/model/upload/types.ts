/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-09 17:14:05
 * @LastEditTime: 2022-09-09 17:29:41
 * @LastEditors: Gavin
 */
export type UploadRes = {

  RequestId: string
  code: string | number
  data?: File,
  message: string,
  images?:string
  success: true
}

export type File = {
  delete: string
  file_id: number
  filename: string
  hash: string
  height: number
  page: string
  path: string
  size: number
  storename: string
  url: string
  width: number
}