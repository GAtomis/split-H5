<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-06 11:57:05
 * @LastEditTime: 2022-09-06 16:08:11
 * @LastEditors: Gavin
-->
<template>
  <div class="layout-content billRecord   " >
    <nav v-if="currentRecrod">
      <van-cell-group>
      <van-cell :title="currentRecrod.title"  :icon="currentRecrod.icon" size="large"  @click="showNumKeyBoard=true" :label="currentRecrod.label">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
                {{
                  amount
                }}{{
                  amount&&'  CNY'
                }}
        </template>
      </van-cell>
     

    </van-cell-group>
    </nav>
    <footer>

      <van-number-keyboard
  :show="showNumKeyBoard"
  theme="custom"
  :extra-key="['00', '.']"
  close-button-text="完成"
  @blur="showNumKeyBoard = false"
  @input="onInput"
  @delete="onDelete"
/>
    </footer>

  </div>
</template>

<script lang='ts' setup>
import { computed,ref } from 'vue'
import { useEnum } from '@/store/pinia'
import { useRoute } from 'vue-router';

const route = useRoute()

const currentRecrod = computed(() => {

const recrodTypeEnum = useEnum().recrodTypeEnum
if (route?.query?.type) {
const currentType = route.query.type as string
return recrodTypeEnum.find(item => item.type == +currentType)
}
return null

})
const amount =ref("00.00")
const showNumKeyBoard=ref(false)
const onInput=(number:string)=>{console.log(number)
  if( amount.value=== "00.00")amount.value="";
  amount.value=amount.value+number 
},
onDelete=(number:any)=>{
  const stringLen=amount.value.length

  amount.value=amount.value.slice(0,stringLen-1)
  //如果删除完就初始化
  if (!amount.value.length) {
    amount.value="00.00"
  }
}

//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>
.billRecord {

  // padding: 10px;
}
</style>