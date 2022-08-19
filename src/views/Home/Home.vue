<!--
 * @Description: Home
 * @Author: Gavin
 * @Date: 2022-08-14 15:50:33
 * @LastEditTime: 2022-08-18 22:33:10
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
    <van-button color="#7232dd" type="primary" round class="home-plus" @click="addBills"> &nbsp;&nbsp;&nbsp;
      <van-icon name="plus" />&nbsp;&nbsp;&nbsp;
    </van-button>

    <van-action-sheet v-model:show="show" :actions="actions" cancel-text="取消" close-on-click-action
      @select="onSelect" />
  </div>

</template>

<script lang='ts' setup>
import { usePullRefresh } from './hooks/usePullRefresh'
import NavSwipe from './components/NavSwipe.vue';
import { showToast } from 'vant';
import FeatBar from './components/FeatBar.vue';
import BillBox from './components/BillBox.vue';
import BillBoxItem from './components/BillBoxItem.vue';
import { ref } from "vue"

//下拉刷新逻辑
const { count, loading: isLoading, onRefresh } = usePullRefresh()
const show = ref(false);
const actions = [
  { name: '新建日常账单' },
  { name: '新建笔记' },
];
const onSelect = (item) => {
  // 默认情况下点击选项时不会自动收起
  // 可以通过 close-on-click-action 属性开启自动收起
  show.value = false;

};
const addBills = () => {
  show.value = true

}
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