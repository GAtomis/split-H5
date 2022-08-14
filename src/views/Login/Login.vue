<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-14 16:23:36
 * @LastEditTime: 2022-08-14 17:43:38
 * @LastEditors: Gavin
-->
<template>
 <div class="Login">

<van-nav-bar
  title="登陆"
  right-text="注册"
  @click-right="onClickRight"
/>
<header >

<van-image
  class="logo"
  :src="logoUrl"
/>
</header>


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
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>

 </div>
</template>

<script lang='ts' setup>
import logoUrl from "@/assets/logo.png"
import useLogin from './hooks/useLogin'

const { username,password,onSubmit} =useLogin()
 const onClickRight = () => history.back();
//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>
header{
  position: relative;
  height: 200px;
  
  .logo{
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%, -50%)

  }
}

</style>