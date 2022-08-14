<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-14 16:23:36
 * @LastEditTime: 2022-08-14 22:38:19
 * @LastEditors: Gavin
-->
<template>
  <div class="Login">

    <van-nav-bar :title="$route.meta.title as  string " :right-text="title" @click-right="onClickRight" />
    <header>

      <van-image class="logo" :src="logoUrl" />
    </header>

    <router-view v-slot="{ Component, route }">
       <transition :name="route.meta.transition as string|| 'fade'" mode="out-in">
        <keep-alive>
            <component :is="Component" :key="route.meta.usePathKey ? route.path : undefined" />
        </keep-alive>
      </transition>
    </router-view>

  </div>
</template>

<script lang='ts' setup>
import logoUrl from "@/assets/logo.png"
import { useRouter,useRoute} from "vue-router";

import { ref, computed } from "vue"
const $router=useRouter()
const $route=useRoute()
const title = computed(() => $route.path=="/login" ? "注册" : "登录")
const toPath= computed(() => $route.path=="/login"? "/register" : "/login")

const onClickRight = () => {

  $router.push({
    path:toPath.value
  })
  
}

//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>
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