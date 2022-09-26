<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-16 11:12:49
 * @LastEditTime: 2022-09-24 11:40:52
 * @LastEditors: Gavin
-->
<template>
  <div class="guide">


    <user-info class="guide-info"></user-info>
  </div>
</template>

<script lang='ts' setup>

import UserInfo from './components/UserInfo.vue'
//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>
.guide {

  margin: 15px 0px;
  &-nav{
    margin-bottom: 15px;
  }


}
</style>