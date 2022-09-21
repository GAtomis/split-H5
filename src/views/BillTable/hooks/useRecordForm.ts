/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-23 01:06:13
 * @LastEditTime: 2022-09-21 11:38:34
 * @LastEditors: Gavin
 */
//枚举

import {ref,reactive,computed,toRaw} from "vue"
import dayjs from 'dayjs'
import { useRouter,useRoute } from 'vue-router';
// import  utc from 'dayjs/plugin/utc'
import {useTempTable} from '@/store/pinia'
import type{BillRecord} from "@/model/bill/types"

export default function useRecordDialog(){
  const router=useRouter()
  const route=useRoute()
  const tempStore=useTempTable()
  const form=reactive<BillRecord>({
    id:'',
    creatorId:'',
    price:"",
    endTime:0,
    existing:1,
    type:+(route.query?.id??1),
    img:'',
    describe:'',
    area:'',
  })
  const onSubmit = () => {
    console.log('submit', form);

    router.replace({path:"/bill/billTable",query:{active:'record'}})
  };

 
  return {
    onSubmit,
    form,


  }
}