<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-22 16:01:54
 * @LastEditTime: 2022-09-22 16:37:27
 * @LastEditors: Gavin
-->
<template>
 <div>
<van-notice-bar
  left-icon="volume-o"
  scrollable
  text="目前站点试运行中,喜欢如有bug请及时上报github。或者给作者的项目中留issues"
/>
  <user-header :info="userStore.sys_user"/>



 </div>
</template>

<script lang='ts' setup>
import UserHeader from './components/UserInfoHeader.vue'
import {useUser } from '@/store/pinia'
const userStore=useUser()
//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>

</style>