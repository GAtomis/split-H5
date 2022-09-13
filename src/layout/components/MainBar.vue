<!--
 * @Description: tabar
 * @Author: Gavin
 * @Date: 2022-08-14 15:05:26
 * @LastEditTime: 2022-09-13 15:46:30
 * @LastEditors: Gavin
-->

<template>

  <van-tabbar v-model="active">
    <van-tabbar-item :name="item.path" :icon="(item.icon as string)" :key="index" v-for="item,index  of tabarList">{{item.name}}</van-tabbar-item>
 
  </van-tabbar>

</template>

<script lang='ts' setup>

import { ref, computed } from "vue"
import menu from '@/router/modules/menu'
let [item] = menu


const tabarList = computed(() => {
  const res = item.children?.filter(item => {
    return item.meta?.type == "menu"
  })
  return res?.map(item => {
    return {
      path: item.path,
      name: item.meta?.title ?? "default",
      icon: item.meta?.icon ?? "default"
    }

  }) ?? []

})



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