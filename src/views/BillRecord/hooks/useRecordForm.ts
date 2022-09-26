/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-23 01:06:13
 * @LastEditTime: 2022-09-24 22:16:58
 * @LastEditors: Gavin
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
  const tempStore=useTempTable()
  const form = reactive<BillRecord>({
    id:'',
    creatorId: useStore.sys_user?.id as string,
    price: "",
    endTime:  dayjs().valueOf(),
    existing: 1,
    type: +(route.query?.type ?? 1),
    tableId:route.query.tableId as string,
    img: '',
    describe: '',
    area: '',
    creator:useStore.sys_user
  })
  const onSubmit = async () => {

    if(form.id){
      const {result}= await updateItem(form)

    }else{
         const {result}= await createItem(form)

         

    }
    showToast("提交成功")
    
    router.go(-1)
  };
  onMounted(() => {
    if (route.query?.mode=="edit") {
      for (let key in toRaw(form)) {
        //@ts-ignore
        form[key] = tempStore.billRecord[key]
      }
      
    }

  })



  return {
    onSubmit,
    form,


  }
}