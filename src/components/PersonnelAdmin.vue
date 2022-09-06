<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-24 10:45:06
 * @LastEditTime: 2022-08-24 11:03:55
 * @LastEditors: Gavin
-->
<template>
  <div>
    <van-search v-model="searchKey" placeholder="请输入搜索关键词" />
    <van-cell-group inset>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
  </div>
</template>

<script lang='ts' setup>
import { ref } from "vue"
const searchKey = ref('')
//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>
</style>