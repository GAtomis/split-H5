<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-14 16:23:36
 * @LastEditTime: 2023-06-13 20:30:36
 * @LastEditors: GAtomis 850680822@qq.com
-->
<template>
  <div class="Login" :class="isDark">



    
    <header>
          <van-image class="logo" :src="logoUrl" />
      

    </header>

    <router-view v-slot="{ Component, route }">
       <transition :name="route.meta.transition as string|| 'fade'" mode="out-in">
        <keep-alive>
            <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>


  </div>
</template>

<script lang='ts' setup>
import logoUrl from "@/assets/logo.png"
import { inject } from 'vue'
import type {Theme}from '@/model/enum/types'
const isDark= inject<Theme>('theme')




//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>


.Login{
  height: 100vh;

}
.dark{
  background:url(https://s2.loli.net/2022/09/23/7qDn9NMw3T5omEB.webp);
  background-size: cover; 
}
.light{
  background:url(https://s2.loli.net/2022/09/23/7qDn9NMw3T5omEB.webp);
  background-size: cover; 
}

header {
  position: relative;
  height: 200px;

  .logo {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
  }
}

.fade-enter-active,.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,.fade-leave-to {
  opacity: 0;
}

</style>