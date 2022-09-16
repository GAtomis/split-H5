/*
 * @Description: 有泛型
 * @Author: Gavin
 * @Date: 2022-09-13 16:41:29
 * @LastEditTime: 2022-09-13 17:41:58
 * @LastEditors: Gavin
 */




import { ref } from 'vue';
import { areaList } from '@vant/area-data';
import type {

  PickerConfirmEventParams,
} from 'vant';

export default function () {
  
  const showArea = ref(false);



  return {
    areaList,
    showArea,
  };

}
export type OnAreaConfirm=(obj:PickerConfirmEventParams)=>void