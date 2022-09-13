<!--
 * @Description: 框架
 * @Author: Gavin
 * @Date: 2022-08-14 15:03:42
 * @LastEditTime: 2022-09-13 11:49:38
 * @LastEditors: Gavin
-->

<template>

  <section>
    <NavBar />
    <main>

      <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition as string || 'fade'" mode="out-in">
        <keep-alive v-if="route.meta.cache">
          <component class="layout-content" :is="Component" :key="route.fullPath" />
        </keep-alive>
        <template v-else>
          <component class="layout-content" :is="Component" :key="route.fullPath" />
        </template>

      </transition>
    </router-view>
    </main>

    <LayTabbar />

  </section>

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