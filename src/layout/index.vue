<!--
 * @Description: 框架
 * @Author: Gavin
 * @Date: 2022-08-14 15:03:42
 * @LastEditTime: 2022-08-14 15:29:08
 * @LastEditors: Gavin
-->

<template>
    <main-tabbar />
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
</template>

<script lang='ts' setup>
import MainTabbar from "./components/MainBar.vue"

//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>

</style>