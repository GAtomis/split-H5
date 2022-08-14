<!--
 * @Description: 注册
 * @Author: Gavin
 * @Date: 2022-08-14 18:09:46
 * @LastEditTime: 2022-08-14 22:41:09
 * @LastEditors: Gavin
-->
<template>
<van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="设置用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      name="密码"
      label="密码"
      placeholder="设置密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
     <van-field
      v-model="password"
      type="password"
      name="确认密码"
      label="确认密码"
      placeholder="确认密码"
      :rules="[{ required: true, message: '请确认密码' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      注册
    </van-button>
  </div>
</van-form>


</template>

<script lang='ts' setup>
import useRegister from '../hooks/useRegister'

const { username,password,onSubmit} =useRegister()
//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>

</style>