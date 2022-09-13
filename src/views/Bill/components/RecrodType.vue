<!--
 * @Description: 记录
 * @Author: Gavin
 * @Date: 2022-08-23 23:36:58
 * @LastEditTime: 2022-09-07 19:37:48
 * @LastEditors: Gavin
-->
<template>
  <div>

    <van-search v-model="serachKey" placeholder="请输入想要查询的表单"    @update:model-value="onSearch" />
    <van-cell-group>
      <van-cell :title="title" :key="type" v-for="{title,icon,label,type}  in recrodList" @click="handleType({title,icon,label,type})" :icon="icon" size="large" :label="label">
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
import {RecrodType} from "@/model/enum/types"
import {useEnum} from '@/store/pinia'

const serachKey = ref('')
const  defaultRecrod:RecrodType[]=useEnum().recrodTypeEnum
//功能列
const recrodList= ref<RecrodType[]>(defaultRecrod)
const onSearch=(key:string)=>{
  recrodList.value= defaultRecrod.filter(item=>item.title.includes(key)||item.label.includes(key))
}


const emit = defineEmits<{
  (e: 'current', type: number): void

}>()
//click 选择类型
const handleType=(item:RecrodType)=>{
  emit('current',item.type)
}
</script>

<style scoped lang='scss'>
</style>