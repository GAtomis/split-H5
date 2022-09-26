<!--
 * @Description: 框架
 * @Author: Gavin
 * @Date: 2022-08-14 15:03:42
 * @LastEditTime: 2022-09-24 23:08:48
 * @LastEditors: Gavin
-->

<template>

  <section>
    <NavBar v-if="route.meta.type=='link'"/>
    <main >

      <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition as string || 'fade'" mode="out-in">
        <keep-alive  :include="cache">
          <component class="layout-content" :is="Component"  />
        </keep-alive>
  
      </transition>
    </router-view>
    </main>

    <TabBar  v-if="route.meta.type=='menu'"/>

  </section>

</template>

<script lang='ts' setup>
import TabBar from "./components/TabBar.vue"
import NavBar from './components/NavBar.vue'
import {filterChildren} from "@/hooks/useRouteFilter"
import {publicRouteTable} from "@/router"
import {computed} from "vue"
import { useRoute } from "vue-router"

const route=useRoute()

 const cache= computed(()=>{
      return filterChildren(publicRouteTable,route=>!!route.meta?.cache).map(item=>item.name as string)

})

const bottom = computed(()=>route.meta.type=='menu'?'50px':'0px')
const top = computed(()=>route.meta.type=='link'?'48px':'0px')


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
  top: v-bind(top);
  bottom: v-bind(bottom);
  left: 0;
  overflow: hidden;
  overflow-y: scroll;
  background-color: var(    --van-border-color);
}

.fade-enter-active,.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,.fade-leave-to {
  opacity: 0;
}

</style>