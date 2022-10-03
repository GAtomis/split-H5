<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-16 18:22:58
 * @LastEditTime: 2022-10-03 12:22:59
 * @LastEditors: Gavin
-->
<template>
  <div class="warp">



    <section>

      <van-cell-group>
        <van-cell :title="item.name">

          <template #value>
            <span>创建人：<van-tag type="success" size="medium">{{creator?.name}}</van-tag></span>

          </template>

        </van-cell>
        <p class="user-warp"> <span>参与人:</span>
          <van-tag v-for="user in item.sysUsers" :key="user.id" type="primary" size="medium">{{user.name}}</van-tag>
        </p>

        <van-cell icon="location-o" :title="item.area" :label="item.describe">
          <template #value>

            <span>CNY </span>
            <span style=" margin-left:2px;color: var(--van-card-price-color);
    font-weight: var(--van-font-bold);
    font-size:17px;"> {{item.bilRecords.length&&item.bilRecords.map(r=>+r.price).reduce((total, val) => total + val)}}</span>

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
const total = computed(() => props.item.creator)
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>
.warp {




  .tag {
    position: absolute;
    right: 10px;
    top: 0px;
    // margin: 5px;

  }

  .user-warp {
    margin-left: 15px;

    span {
      margin-right: 5px;
    }
  }

  .timezone {
    padding: 5px 10px;
    text-align: right;

    color: var(--van-text-color-2);
  }

  // section {


  // }

}
</style>