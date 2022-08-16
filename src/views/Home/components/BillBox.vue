<!--
 * @Description: 账单动态
 * @Author: Gavin
 * @Date: 2022-08-16 18:21:06
 * @LastEditTime: 2022-08-16 18:52:22
 * @LastEditors: Gavin
-->
<template>
 <div class="wrap-content warp">
    <head>{{title}}</head>
    <section>   
      <slot></slot>
    </section>
 </div>
</template>

<script lang='ts' setup>
//expects props options
const props = defineProps<{
  title:string
}>()
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>
.warp{
  margin: 10px;
  

}

</style>