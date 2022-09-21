<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-21 10:50:27
 * @LastEditTime: 2022-09-21 15:49:19
 * @LastEditors: Gavin
-->
<template>
  <header>
    <van-swipe-cell v-for="item,index in form?.sysUsers" :key="index">

      <van-cell center is-link>
        <template #title>
          <div class="left-row">
            <van-icon name="user-circle-o" class="user-icon" size="8vw" />
            <span class="name">{{ item.name }}</span>
          </div>
        </template>
      </van-cell>

      <template #right>
        <van-button square @click="delUser(item,index)" type="danger" text="删除" />
      </template>
    </van-swipe-cell>

    <van-contact-card @click=" isSysUserShow=true" type="add" />

    <footer>


      <van-action-sheet v-model:show="isSysUserShow" title="检索联系人">
        <SearchContact @on-select="offSysUserShow" />
      </van-action-sheet>
    </footer>
  </header>
</template>

<script lang='ts' setup>
  import {ref} from 'vue'
import type { UserInfo } from "@/model/user/types"
import type { BillTable } from "@/model/bill/types"
import SearchContact from './SearchContact.vue';
import { showToast } from 'vant';
//expects props options
const props = defineProps<
{
  form:BillTable
}
>()
//expects emits options
//const emit = defineEmits(['update', 'delete'])

/**
 * @description: 删除选中用户
 * @param {*} item 选中的用户
 * @param {*} index 选中的当前索引
 * @return {*}
 * @Date: 2022-09-21 15:39:13
 */
const delUser=(item:UserInfo,index:number)=>{
 props.form.sysUsers.splice(index,1)

}
const isSysUserShow = ref(false)

/**
 * @description: 关闭并提交弹窗
 * @param {*} user
 * @return {*}
 * @Date: 2022-09-21 15:39:49
 */
const offSysUserShow = (user: UserInfo | any) => {

     if (props.form.sysUsers.every(item => item.id != user.id)) {
      props.form.sysUsers.push(user)
     } else {
          showToast("当前用户已添加")
     }

     isSysUserShow.value = false
}

</script>

<style scoped lang='scss'>
  header {
     // line-height: 40px;



     .left-row {
          // align-items: center;

          // border-bottom: 1px solid #eee;
          .user-icon {
               margin-left: 5px;
               transform: translateY(15%);
          }

          .name {
               margin-left: 15px;
               font-size: 18px;
          }


     }



}


</style>