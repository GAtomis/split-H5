<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-16 18:12:20
 * @LastEditTime: 2022-08-16 18:50:47
 * @LastEditors: Gavin
-->



<template>
<van-grid :column-num="3" class="wrap-content">
  <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
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