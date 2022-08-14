<!--
 * @Description: 框架
 * @Author: Gavin
 * @Date: 2022-08-14 15:03:42
 * @LastEditTime: 2022-08-14 23:01:27
 * @LastEditors: Gavin
-->

<template>
    <main-tabbar />

      <router-view />

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