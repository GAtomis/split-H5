<!--
 * @Description: Home
 * @Author: Gavin
 * @Date: 2022-08-14 15:50:33
 * @LastEditTime: 2022-08-16 22:53:47
 * @LastEditors: Gavin
-->
<template>

  <div class="home layout-content">

    <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh" class="layout-content">

    <!-- 轮播图 -->
    <nav-swipe />
    <!-- 功能栏 -->
    <feat-bar></feat-bar>
    <!-- 账单动态 -->
    <bill-box :title="'账单动态'">
      <bill-box-item></bill-box-item>
    </bill-box>
    
      




    </van-pull-refresh>
    <van-button color="#7232dd" type="primary" round class="home-plus"> &nbsp;&nbsp;&nbsp;
      <van-icon name="plus" />&nbsp;&nbsp;&nbsp;
    </van-button>
  </div>

</template>

<script lang='ts' setup>
import { usePullRefresh } from './hooks/usePullRefresh'
import NavSwipe from './components/NavSwipe.vue';

import FeatBar from './components/FeatBar.vue';
import BillBox from './components/BillBox.vue';
import BillBoxItem from './components/BillBoxItem.vue';


//下拉刷新逻辑
const { count,loading:isLoading,onRefresh } = usePullRefresh()
//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>
.home {
  position: relative;

  &-plus {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

  }


}
</style>