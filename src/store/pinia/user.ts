/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-12-29 15:13:50
 * @LastEditTime: 2022-09-16 14:35:09
 * @LastEditors: Gavin
 */
import { defineStore } from 'pinia'
import { useLocalStorage } from "@vueuse/core"
import type { Login, Register, UserInfo } from "@/model/user/types"
import type { UserState } from '../types'
import type { Result } from "@/model/common/types"

import { login, register, getUserInfo } from "@/api/user-api"
export default defineStore("user", {

  state: (): UserState => ({
    token: useLocalStorage('token', ""),
    user: {
      avatar: "",
      id: '',
      name: "",
      gender: 1
    }
  }),
  getters: {
    sys_token: state => state.token,
    sys_user: state => state.user
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
  async  getUserInfo() {

      // return new Promise(async (resolve: (value: UserInfo) => void, reject: (value: Error | Result<any>) => void) => {


      //   getUserInfo().then((res) => {
      //     const result=res.result
      //     //便利赋值需要的属性
      //     Object.keys(this.user).forEach(item => {
      //       this.user[item] = result[item]
      //     })
      //     resolve(result)

      //   }).catch(err => {
      //       reject(err as Error | Result<any>)

      //   })

      // })

      try {
        const { result } = await getUserInfo()
          //便利赋值需要的属性
          Object.keys(this.user).forEach(item=>{
              this.user[item]=result[item]
          })
        return result

      } catch (error) {


        // console.log(error,"aded");

        return Promise.reject<Result<any>|Error>(error) 

      }


    }
  },
})
