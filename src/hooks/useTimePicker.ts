/*
 * @Description: 时间组件必要
 * @Author: Gavin
 * @Date: 2022-09-13 15:35:43
 * @LastEditTime: 2022-09-14 15:07:30
 * @LastEditors: Gavin
 */

import { ref, computed } from 'vue'
import dayjs from 'dayjs'
export default function () {

  const time = ref<string>(dayjs().format('YYYY-MM-DD HH:mm:ss'))
  //时间选择弹窗
  const showPicker = ref(false);
  const onConfirm = ({ selectedValues }: { selectedValues: string[] }) => {
   const current= dayjs(selectedValues.join('-')).format()
  time.value=dayjs(current).format('YYYY-MM-DD HH:mm:ss')
    showPicker.value = false;
  };
  const defaultTime=time.value.split("-");  

  return {
    time,
    showPicker,
    onConfirm,
    defaultTime
  }

}