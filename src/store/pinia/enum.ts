/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-12-29 15:13:50
 * @LastEditTime: 2022-09-06 15:02:13
 * @LastEditors: Gavin
 */
import { defineStore } from 'pinia'
import { useLocalStorage } from "@vueuse/core"

import {EnumState} from '@/store/types'


export default defineStore("enum", {

  state: (): EnumState => ({
    recrodType: [{title:'交通费用',icon:'',label:'租车,打车,公共交通,高铁,动车,飞机,燃油费用,停车',type:1},
    {title:'餐饮费用',icon:'',label:'吃饭,团建,饮料',type:2},
    {title:'住宿费用',icon:'',label:'住宿,旅馆,宾馆',type:4},
    {title:'场景地点费用',icon:'',label:'场景服务费用,场地租赁,门票,娱乐活动费用',type:5},
    {title:'其他费用',icon:'',label:'零食,百货',type:6}] ,

  }),
  getters: {
    recrodTypeEnum:state=>state.recrodType
  },
  actions: {

  },
})
