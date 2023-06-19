/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-14 17:41:38
 * @LastEditTime: 2023-06-13 18:37:29
 * @LastEditors: GAtomis 850680822@qq.com
 */

import { ref, reactive } from "vue"

import { getCaptchaUrl } from "@/utils"
import { captcha } from '@/api/base-api'


export default function () {
  //验证密码
  const validatorRePass = (val: string) => val == password.value;
  const username = ref('');
  const password = ref('');
  const rePassword = ref('');
  const name = ref('')
  const code = ref('');
  const codeUrl = ref(getCaptchaUrl())

  const resetCode = () => {
    code.value = ""
    codeUrl.value = getCaptchaUrl()
  }

  const picPath = ref('')
  const loginFormData = reactive({
    captcha: '',
    captchaId: '',
    openCaptcha: false,
  })


  // 获取验证码
  const loginVerify = () => {
    captcha({}).then(async (ele) => {
      picPath.value = ele.data.picPath
      loginFormData.captchaId = ele.data.captchaId
      loginFormData.openCaptcha = ele.data.openCaptcha
    })
  }
  loginVerify()

  return {
    username, password, code, codeUrl, rePassword, name,
    validatorRePass, resetCode, loginVerify,
    loginFormData, picPath
  }
}