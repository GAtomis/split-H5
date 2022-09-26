<!--
 * @Description: Home
 * @Author: Gavin
 * @Date: 2022-08-14 15:50:33
 * @LastEditTime: 2022-09-26 15:47:16
 * @LastEditors: Gavin
-->
<template>

  <div class="home ">



    <!-- 轮播图 -->
    <nav-swipe />
    <!-- 功能栏 -->
    <feat-bar class="feat-bar"></feat-bar>
    <!-- 账单动态 -->
    <bill-box :title="'账单动态'">


      <van-skeleton title :row="8" :loading="loading">
      

        <section v-if="isEmpty">
          <bill-box-item class="bill-item-warp" @click="handleBillTable(item,index)" v-for="item,index in tableList"
            :item="item" :key="index">
          </bill-box-item>
        </section>
        <section v-else>
          <van-empty description="当前还没有账单" />
        </section>

      </van-skeleton>


    </bill-box>







    <van-button icon="plus" type="primary" round class="home-plus" @click="addBills">

    </van-button>

    <van-action-sheet v-model:show="show" :actions="actions" cancel-text="取消" close-on-click-action
      @select="onSelect" />
  </div>

</template>

<script lang='ts' setup>
// import { usePullRefresh } from './hooks/usePullRefresh'
//头部轮博
import NavSwipe from './components/NavSwipe.vue';
//弹出组件类型
import type { ActionSheetAction } from 'vant';
//功能栏组件
import FeatBar from './components/FeatBar.vue';
//table展示
import BillBox from './components/BillBox.vue';
import BillBoxItem from './components/BillBoxItem.vue';

import { ref, onMounted,computed } from "vue"
import { useRouter } from "vue-router"
import type { BillTable } from "@/model/bill/types"
//后台请求
import { getTableListByUser } from "@/api/bill-table-api"


const show = ref(false);


const tableList = ref<BillTable[]>([])
const isEmpty=computed(()=>tableList.value.length)
const loading = ref(false)
const getTables = async () => {
  loading.value = true
  const { result } = await getTableListByUser({
    page:1,
    pageSize:10
  })

  result.item
  tableList.value = result.item
  loading.value = false

}
// //下拉刷新逻辑
// const { count, loading: isLoading, onRefresh } = usePullRefresh(getTables)

onMounted(() => {
  getTables()
})

//实例化一个router
const router = useRouter()

const actions: ActionSheetAction[] = [
  { name: '新建日常账单' },
  { name: '新建笔记' },
];

const handleBillTable: (item: BillTable, index: number) => void = ({ id }, index) => {

  router.push({
    path: "/bill/billTable",
    query: {
      id

    }
  })
}

/**
 * @description: 添加选择菜单
 * @param {*} item
 * @return {*}
 * @Date: 2022-08-22 15:40:23
 */
const onSelect = (item: ActionSheetAction) => {
  // 默认情况下点击选项时不会自动收起
  // 可以通过 close-on-click-action 属性开启自动收起
  switch (item.name) {
    case "新建日常账单": router.push({
      name: "BillForm",
      query: {
        mode: 'new'
      }
    })

      break;

    default:
      break;
  }

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
  margin-bottom: 10px;

  .feat-bar {

    min-height: 102px;
  }

  &-plus {
    position: fixed;
    bottom: 80px;
    right: 4%;
    opacity: .5;
    // transform: translateX(-50%);


  }

  .bill-item-warp {
    // position: relative;
    margin: 0 10px;
    margin-bottom: 10px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    border: 1px solid var(--van-border-color);
    ;
  }


}
</style>