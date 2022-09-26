<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-13 15:24:08
 * @LastEditTime: 2022-09-24 16:37:30
 * @LastEditors: Gavin
-->
<template>
  <van-form  readonly>

    <van-field v-model="form.name"  name="pattern" placeholder="输入账单标题" label="标题"
      :rules="[{ required: true, message: '请填写用户名' }]" />

    <van-field v-model="time" is-link readonly name="datePicker" label="有效期" placeholder="点击选择时间"
      @click="showPicker = true" />

    <van-field v-model="form.area" is-link readonly name="area" label="地区选择" placeholder="点击选择省市区"
      @click="showArea = true" :rules="[{ required: true, message: '请填写用户名' }]" />


    <van-field v-model="form.describe" rows="2" autosize label="描述" type="textarea" maxlength="50" placeholder="请输入留言"
      show-word-limit />




  </van-form>



</template>

<script lang='ts' setup>
import type { BillTable } from "@/model/bill/types"
import useTimePicker from '@/hooks/useTimePicker'
import { watchEffect ,computed,ref} from 'vue'
import useAreaPicker, { OnAreaConfirm } from '@/hooks/useAreaPicker'

import dayjs from "dayjs";




//expects props options
const props = defineProps<{
  form: BillTable
}>()
//地区选择逻辑
const { showArea, areaList } = useAreaPicker()
const changeArea: OnAreaConfirm = ({ selectedOptions }) => {
  showArea.value = false
  props.form.area = selectedOptions.map((item) => item!.text).join('/');

}
const isEdit=computed(()=>props.form?.id&&props.form.id!="")
//时间选择期逻辑
const { time,
  showPicker,
  numToTimeFormat,
 } = useTimePicker((time)=>{
    props.form.endTime= dayjs(time).valueOf()

 })


 watchEffect(()=>{
   time.value=numToTimeFormat(props.form.endTime)

 })









//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>

</style>