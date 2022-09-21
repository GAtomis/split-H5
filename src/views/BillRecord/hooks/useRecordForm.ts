/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-23 01:06:13
 * @LastEditTime: 2022-09-21 19:58:03
 * @LastEditors: Gavin
 */
//枚举

import { reactive, toRaw, onMounted } from "vue"

import { useRouter, useRoute, } from 'vue-router';
// import  utc from 'dayjs/plugin/utc'
import { useTempTable,useUser } from '@/store/pinia'
import type { BillRecord } from "@/model/bill/types"
export default function useRecordDialog() {
  const router = useRouter()
  const route = useRoute()
  const tempStore = useTempTable()
  const useStore=useUser()
  const form = reactive<BillRecord>({
    id:'',
    creatorId: useStore.sys_user?.id as string,
    price: "",
    endTime: 0,
    existing: 1,
    type: +(route.query?.type ?? 1),
    img: '',
    describe: '',
    area: '',
    creator:useStore.sys_user
  })
  const onSubmit = () => {
    console.log('submit', form);
    tempStore.updateBilRecords(toRaw(form))
    router.replace({ path: "/bill/billTable", query: { active: 'record' }})
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