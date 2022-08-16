<!--
 * @Description: navbar
 * @Author: Gavin
 * @Date: 2022-08-16 16:35:53
 * @LastEditTime: 2022-08-16 17:01:27
 * @LastEditors: Gavin
-->
<template>
  <div class="navbar">
    <van-nav-bar :title="pageTitle" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft"
      @click-right="onClickRight" />
  </div>
</template>
<script lang='ts' setup>
import {useRouter,useRoute} from "vue-router"
import {computed} from "vue"

const router=useRouter()
const route= useRoute()
//左边按钮
const onClickLeft=()=>{
    router.go(-1)
  
}
//
const pageTitle=computed(()=>route.meta.title as string)

//右边按钮
const onClickRight=()=>{
}




//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>

</style>