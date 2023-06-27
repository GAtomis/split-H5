<!--
 * @Description: 记录
 * @Author: Gavin
 * @Date: 2022-08-23 23:36:58
 * @LastEditTime: 2023-06-27 13:41:34
 * @LastEditors: GAtomis 850680822@qq.com
-->
<template>
  <div>

    <van-search v-model="serachKey" placeholder="请输入想要查询的表单"    @update:model-value="onSearch" />
    <van-cell-group>
      <van-cell :title="title" :key="type" v-for="{title,icon,label,type}  in recordList" @click="handleType({title,icon,label,type})" :icon="icon" size="large" :label="label">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>

        </template>
      </van-cell>
     

    </van-cell-group>

  </div>
</template>

<script lang='ts' setup>
//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options


import { ref } from 'vue'
import {RecordType} from "@/model/enum/types"
import {useEnum} from '@/store/pinia'
import {getDict} from '@/utils/dictionary'

const serachKey = ref('')
const  defaultRecord:RecordType[]=useEnum().recordTypeEnum
//功能列
const recordList= ref<RecordType[]>(defaultRecord)
const onSearch=(key:string)=>{
  recordList.value= defaultRecord.filter(item=>item.title.includes(key)||item.label.includes(key))
}


const emit = defineEmits<{
  (e: 'current', type: number): void

}>()
//click 选择类型
const handleType=(item:RecordType)=>{
  emit('current',item.type)
}
</script>

<style scoped lang='scss'>
</style>