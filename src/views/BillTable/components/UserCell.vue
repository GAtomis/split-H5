<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-21 10:50:27
 * @LastEditTime: 2022-09-24 21:23:22
 * @LastEditors: Gavin
-->
<template>
  <header>


      <van-cell center is-link v-for="item,index in form?.sysUsers" :key="index">
        <template #title>
          <div class="left-row">
            <van-icon name="user-circle-o" class="user-icon" size="8vw" />
            <span class="name">{{ item.name }}</span>
          </div>
        </template>
      </van-cell>

  </header>
</template>

<script lang='ts' setup>

import type { BillTable } from "@/model/bill/types"

//expects props options
const props = defineProps<
{
  form:BillTable
}
>()




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


</style>