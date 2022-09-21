/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-06 16:09:53
 * @LastEditTime: 2022-09-06 16:12:25
 * @LastEditors: Gavin
 */
import { ref } from 'vue'


export  default function useNumKeyBoard() {


  const amount =ref("00.00")
const showNumKeyBoard=ref(false)
const onInput=(number:string)=>{console.log(number)
  if( amount.value=== "00.00")amount.value="";
  amount.value=amount.value+number 
},
onDelete=(number:any)=>{
  const stringLen=amount.value.length

  amount.value=amount.value.slice(0,stringLen-1)
  //如果删除完就初始化
  if (!amount.value.length) {
    amount.value="00.00"
  }
}

return {
  amount,
  showNumKeyBoard,
  onInput,
  onDelete
}
  
}