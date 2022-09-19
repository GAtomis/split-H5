/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-23 01:06:13
 * @LastEditTime: 2022-09-17 13:11:16
 * @LastEditors: Gavin
 */
//枚举

import {ref,reactive,computed,toRaw} from "vue"
import dayjs from 'dayjs'
import { useRouter,useRoute } from 'vue-router';
// import  utc from 'dayjs/plugin/utc'
import {useTempTable} from '@/store/pinia'
import type{BillRecrod} from "@/model/bill/types"

export default function useRecrodDialog(){
  const router=useRouter()
  const route=useRoute()
  const tempStore=useTempTable()
  const form=reactive<BillRecrod>({
    creatorId:'',
    price:"",
    endTime:0,
    existing:1,
    type:+(route.query?.id??1),
    img:'',
    describe:'',
    area:'',
  })
  const onSubmit = (values:any) => {
    console.log('submit', form);
    tempStore.updateBilRecords(toRaw(form))
    router.replace({path:"/bill/billTable",query:{active:'recrod'}})
  };
  //时间选择弹窗
  // const showPicker = ref(false);
  // dayjs.extend(utc)
  // const onConfirm = ({selectedValues}:{selectedValues:string[]}) => {

    
  //   form.startTime=dayjs(dayjs(selectedValues.join('-')).format()).format('YYYY-MM-DD HH:mm:ss')
  //   showPicker.value = false;
  // };
  // const defaultTime=form.startTime.split("-");  

 
  return {
    onSubmit,
    form,
    // showPicker,
    // onConfirm,
    // defaultTime

  }
}