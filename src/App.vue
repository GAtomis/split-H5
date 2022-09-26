<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-02 12:02:32
 * @LastEditTime: 2022-09-24 09:54:15
 * @LastEditors: Gavin
-->
<script setup lang="ts">
import "@/styles/base.scss"
import type {Theme}from '@/model/enum/types'
import {  usePreferredDark } from '@vueuse/core'
import { provide ,ref} from 'vue'
const isDark = usePreferredDark()
console.log(isDark.value);


const theme=ref<Theme>(isDark.value?'dark':'light')
provide(/* 注入名 */ 'theme', /* 值 */ theme)

</script>

<template>
<van-config-provider :theme="theme">
  <router-view/>
</van-config-provider>

</template>

