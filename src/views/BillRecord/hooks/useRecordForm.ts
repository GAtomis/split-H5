/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-23 01:06:13
 * @LastEditTime: 2023-06-17 09:21:34
 * @LastEditors: GAtomis 850680822@qq.com
 */
//枚举

import { reactive, toRaw, onMounted } from "vue"

import { useRouter, useRoute, } from 'vue-router';
// import  utc from 'dayjs/plugin/utc'
import { useUser,useTempTable } from '@/store/pinia'
import type { BillRecord } from "@/model/bill/types"
import {createItem,updateItem} from '@/api/bill-record-api'
import dayjs from "dayjs";

import {showToast} from 'vant'

export default function useRecordDialog() {
  const router = useRouter()
  const route = useRoute()
  const useStore=useUser()
  const form = reactive<BillRecord>({
    creatorId: '',
    price: 0,
    endTime:  dayjs().valueOf(),
    existing: 1,
    type: +(route.query?.type ?? 1),
    tableId:route.query.tableId as string,
    img: '',
    describe: '',
    area: '',
    creator:undefined
  })
  const onSubmit = async () => {
    form.price=+form.price

    if(form.ID){
      const {data }= await updateItem(form)

    }else{
         const {data}= await createItem(form)

        
    }
    showToast("提交成功")
    
    router.go(-1)
  };
  onMounted(() => {


  })



  return {
    onSubmit,
    form,


  }
}