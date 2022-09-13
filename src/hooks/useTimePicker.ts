/*
 * @Description: 时间组件必要
 * @Author: Gavin
 * @Date: 2022-09-13 15:35:43
 * @LastEditTime: 2022-09-13 16:07:26
 * @LastEditors: Gavin
 */

import { ref, computed } from 'vue'
import dayjs from 'dayjs'
export default function () {

  const time = ref<string>(dayjs().format())
  //时间选择弹窗
  const showPicker = ref(false);
  const timeFmt = computed(() => dayjs(time.value).format('YYYY-MM-DD'))
  const defaultTime = timeFmt.value.split("-");
  const onConfirm = ({ selectedValues }: { selectedValues: string[] }) => {
    time.value = dayjs(selectedValues.join('-')).format()
    showPicker.value = false;
  };

  return {
    time,
    showPicker,
    timeFmt,
    defaultTime, 
    onConfirm
  }

}