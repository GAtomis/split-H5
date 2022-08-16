<!-- 
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-16 18:00:18
 * @LastEditTime: 2022-08-16 18:54:47
 * @LastEditors: Gavin
-->
<template>
<van-swipe class="my-swipe "  :autoplay="3000" indicator-color="white">
  <van-swipe-item>1</van-swipe-item>
  <van-swipe-item>2</van-swipe-item>
  <van-swipe-item>3</van-swipe-item>
  <van-swipe-item>4</van-swipe-item>
</van-swipe>
</template>

<script lang='ts' setup>
//expects props options
const props = defineProps({
foo: String
})
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }

</style>