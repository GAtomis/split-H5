<!--
 * @Description: 框架
 * @Author: Gavin
 * @Date: 2022-08-14 15:03:42
 * @LastEditTime: 2022-08-16 21:29:46
 * @LastEditors: Gavin
-->

<template>

  <NavBar />
  <main>

    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition as string || 'fade'" mode="out-in">
        <keep-alive>
          <component class="content" :is="Component" :key="route.meta.usePathKey ? route.path : undefined" />
        </keep-alive>
      </transition>
    </router-view>
  </main>

  <LayTabbar />
</template>

<script lang='ts' setup>
import LayTabbar from "./components/MainBar.vue"
import NavBar from './components/NavBar.vue'



//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>
main {
  position: absolute;
  top: 48px;
  bottom: 52px;
  left: 0;
  overflow: hidden;
  overflow-y: scroll;
  background-color: #eee;


}
</style>