<!--
 * @Description: tabar
 * @Author: Gavin
 * @Date: 2022-08-14 15:05:26
 * @LastEditTime: 2022-08-14 15:29:03
 * @LastEditors: Gavin
-->

<template>

<van-tabbar v-model="active">
  <van-tabbar-item  name="home" icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item name="search" icon="search">标签</van-tabbar-item>
  <van-tabbar-item name="friends" icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item name="setting" icon="setting-o">标签</van-tabbar-item>
</van-tabbar>
 
</template>

<script lang='ts' setup>
import { Tabbar, TabbarItem } from 'vant';
import {ref} from "vue"
    const active = ref(0);
 
//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>

</style>