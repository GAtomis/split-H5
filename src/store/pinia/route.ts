/*
 * @Description: route
 * @Author: Gavin
 * @Date: 2021-12-29 15:13:50
 * @LastEditTime: 2022-09-21 12:01:28
 * @LastEditors: Gavin
 */
import { defineStore } from 'pinia'

import type {RouteLocationNormalized} from "vue-router"

import {RouteState} from '@/store/types'


export default defineStore("route", {

  state: (): RouteState => ({

    to:null,  
    from:null
    
  }),
  getters: {
    toPage:state=>state.to as RouteLocationNormalized ,
    fromPage:state=>state.from as RouteLocationNormalized
  },
  actions: {
      updateRouteRecord(to:RouteLocationNormalized,from:RouteLocationNormalized){

            this.to=to
            this.from=from
      }
  },
})
