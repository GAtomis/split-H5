/*
 * @Description: axios
 * @Author: Gavin
 * @Date: 2022-08-02 15:04:30
 * @LastEditTime: 2022-08-18 18:01:20
 * @LastEditors: Gavin
 */
import axios, { AxiosResponse, AxiosInstance ,AxiosRequestHeaders} from "axios"
import { Toast } from 'vant';
import {useUser} from "@/store/pinia"



const rootPath = import.meta.env.VITE_BASE_API as string
const instance = axios.create({
  baseURL: rootPath
});
instance.interceptors.request.use((config) => {
 const token= useUser().sys_token
  config.headers!.Authorization=token

  console.log("请求");
  return config
})
instance.interceptors.response.use((response) => {

  const res = response.data
  //权限无权限错误代码跳转error页面
  if (res.code === 224) {
    // router.replace({ path: '/error', query: { errMsg: res.msg } })
  }
  //非0和200返回异常
  if (res && res.code != 0 && res.code != 200) {
    console.log(res.code);

    Toast.fail(res.msg);
    return Promise.reject(new Error(res.message || '返回码异常Error'))
  } else {
    return res
  }



}, error => {
  console.log('err' + error) // for debug
  Toast.fail(error.msg);
  return Promise.reject(error)
}
)

export default instance