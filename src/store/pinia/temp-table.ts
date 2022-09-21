/*
 * @Description: table
 * @Author: Gavin
 * @Date: 2021-12-29 15:13:50
 * @LastEditTime: 2022-09-21 14:38:56
 * @LastEditors: Gavin
 */
import { defineStore } from 'pinia'
import { useStorage } from "@vueuse/core"

import {TempTableState} from '@/store/types'
import type {BillRecord, BillTable} from '@/model/bill/types'


export default defineStore("temp-table", {

  state: (): TempTableState => ({
    billTable:{
      area:'',
      id   :   '',
      name  : '' ,
      describe :'',    
      creatorId:'',
      total:'',
      endTime  : 0,
      state   :1,   
      bilRecords:[],
      userNum   : 0   ,   
      sysUsers   :[]
    },
    billRecord:{


    }

  }),
  getters: {
    bill_table:state=>state.billTable, 
    bill_record:state=>state.billRecord as BillRecord
  },
  actions: {
    updateTable(item:BillTable){
      this.billTable=item
    },
    updateBilRecords(billRecord:BillRecord){
      if (billRecord.id=='') delete billRecord.id
      this.billRecord=billRecord
    },
    clearBilRecord(){
      this.billRecord={}
    }

  },
})
