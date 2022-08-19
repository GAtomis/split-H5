/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-14 17:41:38
 * @LastEditTime: 2022-08-18 17:23:43
 * @LastEditors: Gavin
 */

import {ref} from "vue"

import {getCaptchaUrl} from "@/utils"



export default function () {
  //验证密码
  const validatorRePass = (val:string) =>val==password.value ;
  const username = ref('');
  const password = ref('');
  const rePassword=ref('');
  const name =ref('')
  const code=ref('');
  const codeUrl=ref(getCaptchaUrl())

  const resetCode=()=>{
    code.value=""
    codeUrl.value=getCaptchaUrl()
  }
  return {
    username,password,code,codeUrl,rePassword,name,validatorRePass,resetCode
  }
}