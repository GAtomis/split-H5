<!--
 * @Description: 账单动态
 * @Author: Gavin
 * @Date: 2022-08-16 18:21:06
 * @LastEditTime: 2022-08-16 21:40:23
 * @LastEditors: Gavin
-->
<template>
 <div class="wrap-content warp">
    <header>{{title}}</header>
    <van-divider />
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
header{
  margin-left: 10px;
  font-size: 18px;
  font-weight: 500;
}


</style>