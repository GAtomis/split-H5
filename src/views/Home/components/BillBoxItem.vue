<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-16 18:22:58
 * @LastEditTime: 2022-09-22 15:10:41
 * @LastEditors: Gavin
-->
<template>
  <div class="warp">

  

    <section>

      <van-cell-group >
        <van-cell size="large"  :title="item.name"   >
        
          <template #value>
           <span>创建人：<van-tag type="success" size="medium">{{creator?.name}}</van-tag></span> 

          </template>
        
        </van-cell>
        <p class="user-warp"> <span>参与人:</span> <van-tag  v-for="user in item.sysUsers" :key="user.id" type="primary" size="medium">{{user.name}}</van-tag></p>

        <van-cell   icon="location-o" :title="item.area" :label="item.describe">
          <template #value>

            <span>CNY    </span>
            <span style=" margin-left:2px;font-weight:500; font-size:18px; color: black;">   {{item.total}}</span>
          
          </template>
        
        
        </van-cell>

        <p class="timezone"><span>有效期：{{createTime}}</span> </p>
      </van-cell-group>
      <!-- <p>{{createTime}}</p>
      <p>{{item.id}}</p>
      <van-cell title="单元格" value="内容" label="描述信息" />
      <p>lende</p> -->



    </section>

  </div>
</template>

<script lang='ts' setup>
import type { BillTable } from "@/model/bill/types"
import dayjs from "dayjs";
import { computed } from "vue"

//expects props options
const props = defineProps<{
  item: BillTable

}>()

const createTime = computed(() => dayjs(props.item.createdAt).format("YYYY-MM-DD"))
const creator = computed(() => props.item.creator)
const total =computed(() => props.item.creator)
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>
.warp {

  // position: relative;
  margin: 0 10px;
  margin-bottom: 10px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  

  .tag {
    position: absolute;
    right: 10px;
    top: 0px;
    // margin: 5px;

  }
  .user-warp{
    margin-left: 15px;
    span{
      margin-right: 5px;
    }
  }
  .timezone{
   padding: 5px 10px ;
    text-align: right;

    color:var(--van-text-color-2) ;
  }
  // section {
 

  // }

}
</style>