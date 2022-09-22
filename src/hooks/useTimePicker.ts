/*
 * @Description: 时间组件必要
 * @Author: Gavin
 * @Date: 2022-09-13 15:35:43
 * @LastEditTime: 2022-09-22 13:36:38
 * @LastEditors: Gavin
 */

import { ref, computed } from 'vue'
import dayjs from 'dayjs'

/**
 * @description: 时间选择器需要的hooks
 * @param {function} fn 当选择是回掉函数
 * @return {*}
 * @Date: 2022-09-22 13:36:20
 */
export default function (fn?: (val: string) => void) {
  const time = ref<string>(dayjs().format('YYYY-MM-DD HH:mm:ss'))
  //时间选择弹窗
  const showPicker = ref(false);
  /**
   * @description: 点击时间选择器确定后回调
   * @param {object} param1
   * @return {*}
   * @Date: 2022-09-22 13:27:40
   */
  const onConfirm = ({ selectedValues }: { selectedValues: string[] }) => {
    const current = dayjs(selectedValues.join('-')).format()
    time.value = dayjs(current).format('YYYY-MM-DD HH:mm:ss')
    fn?.(time.value)
    showPicker.value = false;
  };
  const defaultTime = time.value.split("-");
/**
 * @description: val时间转换
 * @param {number} val
 * @return {*}
 * @Date: 2022-09-22 13:27:36
 */
const numToTimeFormat=(val:number)=>dayjs(val).format('YYYY-MM-DD HH:mm:ss');

  return {
    time,
    showPicker,
    onConfirm,
    defaultTime,
    numToTimeFormat
  }

}