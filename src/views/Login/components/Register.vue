<!--
 * @Description: 注册
 * @Author: Gavin
 * @Date: 2022-08-14 18:09:46
 * @LastEditTime: 2022-09-24 23:33:56
 * @LastEditors: Gavin
-->
<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field v-model="username" name="用户名" label="用户名" placeholder="设置用户名"
        :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="password" type="password" name="密码" label="密码" placeholder="设置密码"
        :rules="[{ required: true, message: '请填写密码' }]" />
      <van-field v-model="rePassword" type="password" name="确认密码" label="确认密码" placeholder="确认密码"
        :rules="[{ required: true, message: '请确认密码' }, { validator: validatorRePass, message: '两次输入不一致' }]" />
      <van-field v-model="code" name="验证码" label="验证码" placeholder="验证码"
        :rules="[{ required: true, message: '请输入验证码' }]"> <template #button>
          <img :src="codeUrl" @click="resetCode" alt="">
        </template></van-field>

    </van-cell-group>
    <p style="margin-left: 30px; "> <span @click="toLogin">切换登录</span> </p>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        注册
      </van-button>
    </div>
  </van-form>


</template>

<script lang='ts' setup>
import useRegister from '../hooks/useInfo'

import { useUser } from "@/store/pinia"
import { useRouter } from "vue-router"
import { showSuccessToast } from "vant"

const { username, password, codeUrl, code, rePassword, name, validatorRePass, resetCode } = useRegister()
const router=useRouter()

const onSubmit = async (values: any) => {
  console.log('submit', values);
  useUser().register({
    username: username.value,
    password: password.value,
    code: code.value
  }).then(res => {

    showSuccessToast('注册成功');
    router.replace({
      path: "/login",
      query: {
        from: "register",
        state: "success",
        username: username.value
      }
    })

  }).finally(() => {
    resetCode()
  })
}
const toLogin=()=>{
  router.push({
    name:"Login"
  })

}
//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>

</style>