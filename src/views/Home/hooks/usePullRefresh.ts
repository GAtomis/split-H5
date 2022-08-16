/*
 * @Description: 下拉刷新
 * @Author: Gavin
 * @Date: 2022-08-16 17:42:09
 * @LastEditTime: 2022-08-16 17:52:09
 * @LastEditors: Gavin
 */

import { ref } from 'vue';
export function usePullRefresh(cb?:()=>Promise<any>) {


  const count = ref(0);
  const loading = ref(false);
  const onRefresh = async () => {
    loading.value=true
    await cb?.()
    loading.value=false

  };
  return {
    count,
    loading,
    onRefresh,
  };
  
}