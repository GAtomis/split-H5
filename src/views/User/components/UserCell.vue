<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-23 10:16:01
 * @LastEditTime: 2022-09-24 11:20:27
 * @LastEditors: Gavin
-->
<template>
  <div>
    <van-cell-group>

      <van-cell title="用户信息" is-link  value="个人资料" @click="toEditInfo"> <template #icon>
        <i class="iconfont icon-editor magr-5"></i>
      </template></van-cell>

      <van-cell title="帮助与反馈" is-link  > <template #icon>
        <i class="iconfont icon-help magr-5"></i>
      </template></van-cell>
      <van-cell title="关于项目" is-link  @click="toGithub"> <template #icon>
        <i class="iconfont icon-github-fill magr-5"></i>
      </template></van-cell>
      <van-cell title="版本信息" is-link  value="v-1.0.0"> <template #icon>
        <i class="iconfont icon-banben magr-5"></i>
      </template></van-cell>
      <van-cell title="夜间模式"  > <template #icon>
        <i class="iconfont icon-dark magr-5"></i>
      </template>
    <template #value>

      <van-switch style="border-width:0px" v-model="isDark" active-value="dark"  inactive-value="light"/>
    </template>
    
    
    
    </van-cell>
    </van-cell-group>
    <van-button @click="logout"   block>退出登录</van-button>
  </div>
</template>

<script lang='ts' setup>
import { inject } from 'vue'
import type {Theme}from '@/model/enum/types'
import {useUser} from '@/store/pinia'
import { useRouter } from 'vue-router';

 const userStore=useUser()
 const router=useRouter()
const isDark= inject<Theme>('theme')

  const toGithub=()=>{

    window.open('https://github.com/GAtomis/split-H5')
  }

  const toEditInfo=()=>{
    router.push({name:'EditInfo'})
  }

const  logout =()=>{
  userStore.logout()
}

//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>
.logout-btn{



}
</style>