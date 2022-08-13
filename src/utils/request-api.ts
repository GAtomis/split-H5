/*
 * @Description: axios
 * @Author: Gavin
 * @Date: 2022-08-02 15:04:30
 * @LastEditTime: 2022-08-02 19:01:48
 * @LastEditors: Gavin
 */
import axios, { AxiosResponse, AxiosInstance } from "axios"





const rootPath = import.meta.env.VITE_BASE_API as string
const instance = axios.create({
  baseURL: rootPath
});
instance.interceptors.request.use((config) => {

  console.log("请求");
  return config
})
instance.interceptors.response.use((resp) => {

  console.log("返回拦截");
  return resp.data


})

export default instance