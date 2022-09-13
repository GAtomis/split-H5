/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-23 01:06:13
 * @LastEditTime: 2022-09-13 12:55:35
 * @LastEditors: Gavin
 */
//枚举

import {ref,reactive,computed,toRaw} from "vue"
import dayjs from 'dayjs'
import { useRouter } from 'vue-router';
// import  utc from 'dayjs/plugin/utc'
import {useTempTable} from '@/store/pinia'

export default function useRecrodDialog(){
  const router=useRouter()
  const tempStore=useTempTable()
  const form=reactive({
    userId:0,
    price:"",
    startTime:dayjs().format(),
    existing:1,
    type:1,
    img:'',
    describe:''
  })
  const onSubmit = (values:any) => {
    console.log('submit', form);
    tempStore.updateBilRecords(toRaw(form))
    router.replace({path:"/bill/billTable",params:{name:"123"}})
  };

  //时间选择弹窗
  const showPicker = ref(false);
  // dayjs.extend(utc)
  const onConfirm = ({selectedValues}:{selectedValues:string[]}) => {
    form.startTime=dayjs(selectedValues.join('-')).format()
    showPicker.value = false;
  };
  const startTimeFmt =computed(()=>dayjs(form.startTime).format('YYYY-MM-DD'))
  const defaultTime=startTimeFmt.value.split("-");  
  return {
    onSubmit,
    form,
    showPicker,
    onConfirm,
    startTimeFmt,
    defaultTime

  }
}