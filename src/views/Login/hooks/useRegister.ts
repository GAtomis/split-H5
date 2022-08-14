/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-14 17:41:38
 * @LastEditTime: 2022-08-14 18:15:58
 * @LastEditors: Gavin
 */

import {ref} from "vue"

export default function () {
  const username = ref('');
  const password = ref('');
  const onSubmit = (values:any) => {
    console.log('submit', values);
  };
  
  return {
    username,password,onSubmit
  }
}