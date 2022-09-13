<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-13 15:24:08
 * @LastEditTime: 2022-09-13 16:07:52
 * @LastEditors: Gavin
-->
<template>
  <van-form @submit="onSubmit">

    <van-field v-model="form.name" name="pattern" placeholder="正则校验" :rules="[{ required: true, message: '请填写用户名' }]" />

    <van-field v-model="timeFmt" is-link readonly name="datePicker" label="有效期" placeholder="点击选择时间"
      @click="showPicker = true" />



    <van-field v-model="form.describe" rows="2" autosize label="描述" type="textarea" maxlength="50" placeholder="请输入留言"
      show-word-limit />


    <!-- <input type="file" @change="upl" id="fname" name="fname"> -->
    <div style="margin: 16px;" class="magb-10">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>


  </van-form>

  <van-popup v-model:show="showPicker" position="bottom">
    <van-date-picker v-model="defaultTime" @confirm="onConfirm" @cancel="showPicker = false" />
  </van-popup>

</template>

<script lang='ts' setup>
import type { BillTable } from "@/model/bill/types"
import usePicker from '@/hooks/useTimePicker'
import {watchEffect} from 'vue'
//expects props options
const props = defineProps<{
  form: BillTable
}>()

const { time,
  showPicker,
  timeFmt,
  defaultTime, onConfirm } = usePicker()
const onSubmit = () => {

}
watchEffect(()=>{
  props.form.startTime=time.value
})





//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>

</style>