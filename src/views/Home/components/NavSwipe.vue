<!-- 
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-16 18:00:18
 * @LastEditTime: 2022-10-17 14:50:59
 * @LastEditors: Gavin
-->
<template>
<van-swipe class="my-swipe "  :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="item,index in scrollImgs" :key="index"><img style="width:100% ;height:28vh;"  :src="item.src" /></van-swipe-item>

</van-swipe>
</template>

<script lang='ts' setup>
//expects props options
const props = defineProps({
foo: String
})

const scrollImgs=[
  
{
  src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.2008php.com%2F2019_Website_appreciate%2F2019-10-29%2F20191029213639.jpg&refer=http%3A%2F%2Fwww.2008php.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666423917&t=696100042758ad3ae3239d38873588ca"
},{
  src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpicnew12.photophoto.cn%2F20180910%2Fshangwurenshikaihui-30257028_1.jpg&refer=http%3A%2F%2Fpicnew12.photophoto.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1668581381&t=bd08a806365ec625825b7a7a129a24c2"
},{


  src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdpic.tiankong.com%2Fxa%2Fmw%2FQJ8488103006.jpg&refer=http%3A%2F%2Fdpic.tiankong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666423917&t=c1ff00e8257bc817cb1504b165588968"
}]
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 28vh;
    text-align: center;
    // background-color: #39a9ed;
  }

</style>