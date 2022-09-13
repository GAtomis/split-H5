/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-12-29 15:13:50
 * @LastEditTime: 2022-09-13 14:13:00
 * @LastEditors: Gavin
 */
import { defineStore } from 'pinia'
import { useLocalStorage } from "@vueuse/core"
import type { Login, Register } from "@/model/user/types"
import type {UserState} from '../types'


import { login, register, getUserInfo } from "@/api/user-api"
export default defineStore("user", {

  state: (): UserState => ({
    token: useLocalStorage('token', ""),
    user: {
      avatar: "",
      id: 0,
      username: "",
      name: "",
      gender: false
    }
  }),
  getters: {
    sys_token: state => state.token,
    sys_user:state=>state.user
  },
  actions: {
    async login(param: Login) {
      try {
        const { result } = await login(param)
        this.token = result.token
        return result.token

      } catch (error) {
        return Promise.reject(error)

      }
    },
    async register(param: Register) {
      try {
        const { result } = await register(param)
        this.token = result
        return result

      } catch (error) {
        return Promise.reject(error)

      }
    },
    async getUserInfo() {

      try {
        const { result } = await getUserInfo()
          //便利赋值需要的属性
          Object.keys(this.user).forEach(item=>{
              this.user[item]=result[item]
          })
        return result

      } catch (error) {
        return Promise.reject(error)

      }


    }
  },
})
