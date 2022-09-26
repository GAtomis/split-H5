<template>
 <div class="cover-background">
  <van-image
  round
  width="80px"
  height="80px"
  class="user-avatar"
  :src="info?.avatar??`https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg`"
/>
  <p class="user-name">{{info.name}}</p>
 </div>
</template>

<script lang='ts' setup>
//expects props options
import {computed} from 'vue'
import{UserInfo} from '@/model/user/types'

const props = defineProps <{
  info:UserInfo
}> ()
const rigth=computed(()=>((props.info.name?.length??0)*10+76).toString()+'px')
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>
  .cover-background{
    position: relative;
    width: 100%;
    height: 27vh;
    background:url(https://s2.loli.net/2022/09/22/En26oxzayCF9Beg.webp);
    background-size: cover;
    .user-avatar{
      position: absolute;
      bottom: -25px;
      right:5px;
      z-index: 99999;
    }
    .user-name{
      position: absolute;
      bottom: 0px;
      right:v-bind(rigth);;
      color: #fff;
      font-size: 20px ;
      font-weight: 600;
    }
  }
 

</style>