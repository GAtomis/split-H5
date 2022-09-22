<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-16 18:12:20
 * @LastEditTime: 2022-09-22 15:24:39
 * @LastEditors: Gavin
-->



<template>
<van-grid :column-num="4" class="wrap-content">
  <van-grid-item v-for="value in 1" :key="value"  text="账本" >
  
  <template #icon>
    <van-image
      src="https://s2.loli.net/2022/09/22/NxhqSVkZ3ELbBsD.png"
      width="40"
    />
  </template>

  
  </van-grid-item>
</van-grid>
</template>

<script lang='ts' setup>
//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>

</style>