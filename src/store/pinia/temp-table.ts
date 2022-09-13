/*
 * @Description: table
 * @Author: Gavin
 * @Date: 2021-12-29 15:13:50
 * @LastEditTime: 2022-09-13 16:29:08
 * @LastEditors: Gavin
 */
import { defineStore } from 'pinia'
import { useLocalStorage } from "@vueuse/core"

import {TempTableState} from '@/store/types'
import type {BillRecrod} from '@/model/bill/types'


export default defineStore("temp-table", {

  state: (): TempTableState => ({
    billTable:{
      area:'',
      id   :   '',
      name  : '' ,
      describe :'',    
      startTime :'',
      endTime  : '',
      state   :1,   
      bilRecords:[],
      userNum   : 0   ,   
      sysUsers   :[]
    }

  }),
  getters: {
    bill_table:state=>state.billTable 
  },
  actions: {
    updateTable(){



    },
    updateBilRecords(record:BillRecrod){
      const hasRecords=()=>this.billTable.bilRecords.find(item=>item?.id==record?.id)
      const current=hasRecords()
      if(record?.id&&current){
        Object.assign(current,record)
      }else{
        this.billTable.bilRecords.push(record)
      }

    }

  },
})
