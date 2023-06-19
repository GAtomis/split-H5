<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-24 14:49:03
 * @LastEditTime: 2023-06-14 11:00:37
 * @LastEditors: GAtomis 850680822@qq.com
-->
<template>

  <div>
    <UserCell v-model:form="form" ></UserCell>
    <section>
      <van-cell center>
        <template #title>
          <span class="title">账单信息</span>
        </template>
      </van-cell>

  
      <TableForm v-model:form="form" style="width: 100%;height: 100%;" />

    </section>
  </div>

</template>

<script lang='ts' setup>
import TableForm from './components/TableForm.vue'
import { ref,toRaw } from 'vue'
import type { BillTableInfo } from '@/model/bill/types'
import dayjs from 'dayjs';
import { useUser } from '@/store/pinia';
import UserCell from './components/UserCell.vue'

const currentUser = useUser().sys_user
const form = ref<BillTableInfo>({
  id: '',
  area: '',
  name: '',
  creatorId: currentUser.id as string,
  creator: currentUser,
  describe: '',
  endTime: dayjs().valueOf(),
  sysUsers:[toRaw(currentUser)],
  state: 1,
  userNum: 0,
})
//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>
section {
  margin: 10px;
}
</style>