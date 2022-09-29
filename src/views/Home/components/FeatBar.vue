<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-16 18:12:20
 * @LastEditTime: 2022-09-29 10:30:21
 * @LastEditors: Gavin
-->



<template>
  <van-grid :column-num="4" class="wrap-content">
    <van-grid-item v-for="item in list" :icon="item.icon" :key="item.id" :text="item.title">

    </van-grid-item>
  </van-grid>
</template>


<script lang='ts' setup>

  const list =[
    
  {
    id:1,
    icon:'balance-list',
    name:'BillTable',
    title:'账本'
  },
  {
    id:2,
    icon:'bar-chart-o',
    name:'BillTable',
    title:'图表'
  },

]
//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>

</style>