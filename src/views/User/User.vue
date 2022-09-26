<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-22 16:01:54
 * @LastEditTime: 2022-09-23 12:01:40
 * @LastEditors: Gavin
-->
<template>
  <div class="comp-warp">
    <van-notice-bar left-icon="volume-o" scrollable text="目前站点试运行中,喜欢如有bug请及时上报github。或者给作者的项目中留issues" />
    <user-header :info="userStore.sys_user" />
    <user-cell class="user-cell" />



  </div>
</template>

<script lang='ts' setup>


import UserHeader from './components/UserInfoHeader.vue'

import { useUser } from '@/store/pinia'
import UserCell from './components/UserCell.vue'

const userStore = useUser()



//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>
.comp-warp {

  .user-cell {
    background: var(--van-background-2);
    padding-top:30px ;
  }

}
</style>