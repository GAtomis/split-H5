<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-16 18:22:58
 * @LastEditTime: 2022-08-16 21:59:00
 * @LastEditors: Gavin
-->
<template>
  <div class="warp">
  
      <van-tag type="primary" class="tag" size="medium">标签</van-tag>
   
    <section>
      <p>2022/08/12</p>
      <p>12</p>
      <p><a href="">123</a> dsadsa</p>
      <p>lende</p>

      

    </section>
    
  </div>
</template>

<script lang='ts' setup>
//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>
.warp {

position: relative;

    .tag {
      position: absolute;
      right: 10px;
      top:0px;
      // margin: 5px;

    }

  section{
      margin: 15px 20px;

  }

}
</style>