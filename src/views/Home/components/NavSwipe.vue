<!-- 
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-16 18:00:18
 * @LastEditTime: 2022-09-22 15:43:16
 * @LastEditors: Gavin
-->
<template>
<van-swipe class="my-swipe "  :autoplay="3000" indicator-color="white">
  <van-swipe-item v-for="item,index in scrollImgs" :key="index"><img style="width:100% ;height:22vh;"  :src="item.src" /></van-swipe-item>

</van-swipe>
</template>

<script lang='ts' setup>
//expects props options
const props = defineProps({
foo: String
})

const scrollImgs=[{
  src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp04%2F1Z92H1532L632-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666424571&t=0725c030ff1476ae3692477e3d2d6113"
},{
  src:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.2008php.com%2F2019_Website_appreciate%2F2019-10-29%2F20191029213639.jpg&refer=http%3A%2F%2Fwww.2008php.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666423917&t=696100042758ad3ae3239d38873588ca"
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
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }

</style>