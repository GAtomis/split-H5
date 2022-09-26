<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-14 18:09:46
 * @LastEditTime: 2022-09-24 23:32:18
 * @LastEditors: Gavin
-->
<template>
<van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
      <van-field v-model="code" name="验证码" label="验证码" placeholder="验证码"
        :rules="[{ required: true, message: '请输入验证码' }]"> <template #button>

          <div class="codeUrl">  <img :src="codeUrl" @click="resetCode" alt=""/></div>
        
        </template></van-field>
   
  </van-cell-group>

  <p style="margin-left: 30px; "> <span @click="toRegister">立即注册</span> </p>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      登录
    </van-button>
  </div>

</van-form>


</template>

<script lang='ts' setup>
import useLogin from '../hooks/useInfo'
import {useUser} from "@/store/pinia"
import {useRouter} from "vue-router"
import { showSuccessToast } from "vant"
const { username,password,codeUrl,code,resetCode} =useLogin()
 const $router  = useRouter()
const onSubmit=async()=>{
  useUser().login({

    username: username.value,
    password: password.value,
    code: code.value
  }).then(res => {
   
    $router.push({
      path: "/layout",
    })
     showSuccessToast("登录成功")

  }).finally(() => {
    resetCode()
  })


}
const toRegister=()=>{
  $router.push({
      name:"Register",
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
  .codeUrl{
    img{
      background: var(    --van-field-clear-icon-color);
    }
  }

</style>