<!--
 * @Description: 日常账单
 * @Author: Gavin
 * @Date: 2022-08-22 15:48:43
 * @LastEditTime: 2022-09-06 14:53:18
 * @LastEditors: Gavin
-->
<template>
     <div class="home layout-content">


          <header>
               <van-cell center is-link>
                    <template #title>
                         <div class="left-row">
                              <van-icon name="user-circle-o" class="user-icon" size="8vw" />
                              <span class="name">{{ owner.name }}</span>
                         </div>
                    </template>
               </van-cell>
               <van-contact-card type="add" />


          </header>
          <nav>
               <van-cell center>
                    <template #title>
                         <van-row justify="space-between">
                              <van-col span="6"><span class="title">账单记录</span></van-col>


                         </van-row>
                    </template>
                    <template #right-icon>
                         <van-tag :style="{ padding: '3px' }" type="primary">编辑中</van-tag>
                    </template>
               </van-cell>
               <van-cell center>
                    <template #title>
                         <van-row justify="space-between">
                              <van-col span="6">
                                   <p class="title">费用总计</p>
                                   <p class="value">¥18.00</p>
                              </van-col>
                              <van-col span="6">
                                   <p class="title">总计条目</p>
                                   <p class="value">2</p>
                              </van-col>

                         </van-row>
                    </template>

               </van-cell>

          </nav>
          <main>

               <van-cell center>
                    <template #title>
                         <span class="title">费用明细</span>
                    </template>

               </van-cell>
               <van-cell center>
                    <template #title>
                         <van-button icon="plus" @click="addBillRecord" plain block type="primary">添加账单记录</van-button>
                    </template>

               </van-cell>

          </main>


     </div>
     <footer>

          <van-action-sheet v-model:show="isShow" title="选择记录类型">
               <div class="content">
                    <RecrodType @current="handleCurrent">
                    </RecrodType>

               </div>
          </van-action-sheet>
     </footer>

</template>

<script lang='ts' setup>
import { computed } from 'vue';

import { useUser } from '@/store/pinia'
import { useRecrodDialog } from "./hooks/useRecrodDialog"
import RecrodType from './components/RecrodType.vue';
import { useRouter} from "vue-router";
const owner = computed(() => useUser().sys_user)
const {  isShow, addBillRecord } = useRecrodDialog()
const router=useRouter()


const handleCurrent = (type: number) => {
  router.push({
     path:'/bill/billRecord',
     query:{
          type
     }

  })
   




}

//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>
header {
     // line-height: 40px;



     .left-row {
          // align-items: center;

          // border-bottom: 1px solid #eee;
          .user-icon {
               margin-left: 5px;
               transform: translateY(15%);
          }

          .name {
               margin-left: 15px;
               font-size: 18px;
          }


     }



}

nav {
     margin-bottom: 10px;

     .title {
          text-align: center;
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 10px;
     }

     .value {
          text-align: center;
          font-size: 18px;
          font-weight: 500;
     }
}

main {

     .title {
          font-size: 18px;
          font-weight: 500;
     }

     .content {
          padding: 5px 5px 160px;
     }
}
</style>