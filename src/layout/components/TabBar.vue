<!--
 * @Description: tabar
 * @Author: Gavin
 * @Date: 2022-08-14 15:05:26
 * @LastEditTime: 2022-09-22 16:57:05
 * @LastEditors: Gavin
-->

<template>

  <van-tabbar v-model="active" >
    <van-tabbar-item :name="item.name" :icon="(item.icon as string)" :to="'/layout/'+item.path" :key="index" v-for="item,index  of tabarList">{{item.title}}</van-tabbar-item>
 
  </van-tabbar>

</template>

<script lang='ts' setup>

import { ref, computed,onMounted } from "vue"
import {useRoute,useRouter} from 'vue-router'
import menu from '@/router/modules/menu'
let [item] = menu
const route=useRoute()



const tabarList = computed(() => {
  const res = item.children?.filter(item => {
    return item.meta?.type == "menu"
  })
  return res?.map(item => {
    return {
      path: item.path,
      title: item.meta?.title ?? "default",
      icon: item.meta?.icon ?? "default",    
      name:item.name as string
    }

  }) ?? []

})
const active = ref(route.name?.toString())

// onMounted(()=>{

//   active.value=route.name as string
// })




//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>
</style>