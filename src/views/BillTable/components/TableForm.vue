<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-13 15:24:08
 * @LastEditTime: 2022-09-21 18:22:52
 * @LastEditors: Gavin
-->
<template>
  <van-form @submit="onSubmit">

    <van-field v-model="form.name" name="pattern" placeholder="输入账单标题" label="标题"
      :rules="[{ required: true, message: '请填写用户名' }]" />

    <van-field v-model="time" is-link readonly name="datePicker" label="有效期" placeholder="点击选择时间"
      @click="showPicker = true" />

    <van-field v-model="form.area" is-link readonly name="area" label="地区选择" placeholder="点击选择省市区"
      @click="showArea = true" :rules="[{ required: true, message: '请填写用户名' }]" />


    <van-field v-model="form.describe" rows="2" autosize label="描述" type="textarea" maxlength="50" placeholder="请输入留言"
      show-word-limit />


    <!-- <input type="file" @change="upl" id="fname" name="fname"> -->
    <div style="margin: 16px;" class="magb-10">

      <van-button round  block v-if="submitting" loading type="primary" loading-text="提交中..." />
      <van-button v-else round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
    <van-popup teleport="#app" v-model:show="showPicker" position="bottom">
      <van-date-picker v-model="defaultTime" @confirm="onConfirm" @cancel="showPicker = false" />
    </van-popup>

    <van-popup teleport="#app" v-model:show="showArea" position="bottom">
      <van-area :area-list="areaList" @confirm="changeArea" @cancel="showArea = false" />
    </van-popup>

  </van-form>



</template>

<script lang='ts' setup>
import type { BillTable } from "@/model/bill/types"
import useTimePicker from '@/hooks/useTimePicker'
import { watchEffect ,computed,ref} from 'vue'
import useAreaPicker, { OnAreaConfirm } from '@/hooks/useAreaPicker'
import { showSuccessToast} from 'vant';
import {createItem} from '@/api/bill-table-api'
import dayjs from "dayjs";
function paramsFormat(params:BillTable): BillTable{
  
  !isEdit.value&&delete params.id
  delete params.creator
    return params
}

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
  defaultTime,
 onConfirm } = useTimePicker()


 const submitting=ref(false)
const onSubmit = async () => {
  submitting.value=true
        // console.log(props.form);
        if(isEdit.value){

          console.log(JSON.stringify(paramsFormat(props.form)));
          
          
            //  console.log( paramsFormat(props.form));
             
        }else{

           
          console.log(JSON.stringify(paramsFormat(props.form)));
            
          
        }

    // await createItem(props.form)
    showSuccessToast('成功提交');
    submitting.value=false
}
watchEffect(() => {
  props.form.endTime = dayjs(time.value).valueOf()
})





//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>

</style>