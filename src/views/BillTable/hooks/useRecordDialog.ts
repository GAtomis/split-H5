/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-23 01:06:13
 * @LastEditTime: 2022-09-06 14:53:08
 * @LastEditors: Gavin
 */
//枚举

import {ref} from "vue"
export function useRecordDialog(){

  const isShow= ref(false)
  const addBillRecord=()=>{
    isShow.value=true

  }


  return {

    isShow,
    addBillRecord

  }
}