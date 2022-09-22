<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-06 11:57:05
 * @LastEditTime: 2022-09-22 13:38:54
 * @LastEditors: Gavin
-->
<template>
  <div class=" billRecord   ">
    <nav v-if="currentRecordType">
      <van-cell-group>
        <van-cell :title="currentRecordType.title" :icon="currentRecordType.icon" size="large" :value="form.price"
          @click="showNumKeyBoard=true" :label="currentRecordType.label">
          <!-- 使用 right-icon 插槽来自定义右侧图标 -->
          <template #right-icon>
            <span style="margin-left: 5px;"> {{
            form.price&&' CNY'
            }}</span>

          </template>
        </van-cell>
      </van-cell-group>
    </nav>

    <main>


      <van-form @submit="onSubmit">

        <van-field class="magb-10" label="创建人" :model-value="form.creator?.name" readonly />

        <van-field v-model="time" class="magb-10" is-link readonly name="datePicker" label="发生时间"
          placeholder="点击选择时间" @click="showPicker = true" />
          <van-field name="radio" class="magb-10" label="分摊方式">
          <template #input>
            <van-radio-group v-model="form.existing" direction="horizontal">
              <van-radio :name="1">个人分摊</van-radio>
              <van-radio :name="2">均摊</van-radio>
            </van-radio-group>
          </template>
        </van-field>

        <van-field class="magb-10" name="uploader" label="头像上传">
          <template #input>
            <div>
              <van-uploader v-model="fileList" :capture="capture" :after-read="afterRead" :before-read="beforeRead"
                multiple :max-count="count" />
              <p>附件限制：最多1个，单个不超过10M</p>
            </div>

          </template>

        </van-field>

    

        <van-field class="magb-10" v-model="form.describe" rows="2" autosize label="描述" type="textarea" maxlength="50"
          placeholder="请输入留言" show-word-limit />


        <!-- <input type="file" @change="upl" id="fname" name="fname"> -->
        <div style="margin: 16px;" class="magb-10">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>


      </van-form>




    </main>
    <footer>
      <van-number-keyboard :show="showNumKeyBoard" theme="custom" :extra-key="['00', '.']" close-button-text="完成"
        @blur="showNumKeyBoard = false" @input="onInput" @delete="onDelete" />

      <van-popup v-model:show="showPicker" position="bottom">
        <van-date-picker v-model="defaultTime" @confirm="onConfirm" @cancel="showPicker = false" />
      </van-popup>
    </footer>

  </div>
</template>

<script lang='ts' setup>
import { computed, ref, onMounted, watchEffect } from 'vue'
import { useEnum, useUser } from '@/store/pinia'
import { useRoute } from 'vue-router';
import useNumKeyBoard from './hooks/useNumKeyBoard'
import useRecordForm from './hooks/useRecordForm'
import useUpload from './hooks/useUpload'
import useTimePicker from  '@/hooks/useTimePicker'
import dayjs from 'dayjs';
import {useTempTable} from '@/store/pinia'
// import type { BillRecord } from '@/model/bill/types'

const route = useRoute()
const { form, onSubmit } = useRecordForm()
const currentRecordType = computed(() => {
  const recordTypeEnum = useEnum().recordTypeEnum
  if (route?.query?.type) {
    const currentType = route.query.type as string
    return recordTypeEnum.find(item => item.type == +currentType)
  }
  return null
})
//输入键盘hooks
const { amount, showNumKeyBoard, onInput, onDelete } = useNumKeyBoard()



const { showPicker,
  onConfirm, numToTimeFormat,defaultTime,time}= useTimePicker((time)=>{
      form.endTime= dayjs(time).valueOf()

 })


 watchEffect(()=>{
   time.value=numToTimeFormat(form.endTime)
 })
const { fileList, beforeRead, capture, afterRead, count = 1, imageUrl } = useUpload()

watchEffect(() => {
  form.img = imageUrl.value
})
watchEffect(() => {
  form.price = amount.value
})

onMounted(()=>{

  if (route.query?.id) {

    fileList.value=[{

      url:useTempTable().bill_record.img ,

    }]
  }
  
})


//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>
main {

  padding: 10px;

  .creator {
    margin-bottom: 10px;
  }

}
</style>