<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-16 11:12:49
 * @LastEditTime: 2022-09-16 11:36:08
 * @LastEditors: Gavin
-->
<template>
  <div class="guide">
    <NavBar class="guide-nav" />

    <user-info class="guide-info"></user-info>
  </div>
</template>

<script lang='ts' setup>
import NavBar from '@/layout/components/NavBar.vue';
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
  &-nav{
    margin-bottom: 15px;
  }


}
</style>