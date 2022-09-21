<!--
 * @Description: 框架
 * @Author: Gavin
 * @Date: 2022-08-14 15:03:42
 * @LastEditTime: 2022-09-20 19:43:38
 * @LastEditors: Gavin
-->

<template>

  <section>
    <NavBar />
    <main>

      <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition as string || 'fade'" mode="out-in">
        <keep-alive  :include="cache">
          <component class="layout-content" :is="Component"  />
        </keep-alive>
  
      </transition>
    </router-view>
    </main>

    <LayTabbar />

  </section>

</template>

<script lang='ts' setup>
import LayTabbar from "./components/MainBar.vue"
import NavBar from './components/NavBar.vue'
import {filterChildren} from "@/hooks/useRouteFilter"
import {publicRouteTable} from "@/router"
import {computed} from "vue"


 const cache= computed(()=>{
      return filterChildren(publicRouteTable,route=>!!route.meta?.cache).map(item=>item.name as string)

})


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