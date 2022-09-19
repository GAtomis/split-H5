<!--
 * @Description: 日常账单
 * @Author: Gavin
 * @Date: 2022-08-22 15:48:43
 * @LastEditTime: 2022-09-19 19:48:57
 * @LastEditors: Gavin
-->
<template>

     <div class="home ">

          <van-skeleton title avatar :row="8" :loading="loading" :class="loading&&'bg-white'">

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
                              <van-button square type="danger" text="删除" />
                         </template>
                    </van-swipe-cell>

                    <van-contact-card @click=" isSysUserShow=true" type="add" />


               </header>
               <nav>
                    <van-cell center>
                         <template #title>
                              <van-row justify="space-between">
                                   <van-col span="6"><span class="title">账单记录</span></van-col>


                              </van-row>
                         </template>
                         <template #right-icon>
                              <van-tag :style="{ padding: '3px' }" type="primary">编辑中</van-tag>
                         </template>
                    </van-cell>
                    <van-cell center>
                         <template #title>
                              <van-row justify="space-between">
                                   <van-col span="6">
                                        <p class="title">费用总计</p>
                                        <p class="value">¥{{totalAmount}}</p>
                                   </van-col>
                                   <van-col span="6">
                                        <p class="title">总计条目</p>
                                        <p class="value">{{bilRecords.length}}</p>
                                   </van-col>

                              </van-row>
                         </template>

                    </van-cell>

               </nav>
               <main>

                    <van-tabs v-model:active="active" swipeable>


                         <van-tab :title="'账单信息'" :name="'form'">

                              <van-cell center>
                                   <template #title>
                                        <span class="title">账单信息</span>
                                   </template>

                              </van-cell>
                              <TableForm :form="form" style="width: 100%;height: 100%;" />




                         </van-tab>


                         <van-tab :title="'费用记录'" :name="'recrod'">
                              <section>
                                   <van-cell center>
                                        <template #title>
                                             <span class="title">费用记录</span>
                                        </template>

                                   </van-cell>

                                   <van-swipe-cell v-for=" item,index in bilRecords" :key="index">
                                        <van-card num="1" :price="item.price" :desc="item.describe"
                                             :title="`类型:${useEnum().getRecrodTypeItem(item.type)?.title}`"
                                             class="goods-card"
                                             :thumb="item.img||`https://img2.baidu.com/it/u=2840961417,55008201&fm=253&fmt=auto&app=138&f=JPG?w=500&h=500`" />
                                        <template #right>
                                             <van-button square text="删除" @click="deleteRecord(item,index)"
                                                  type="danger" class="delete-button" />
                                        </template>
                                   </van-swipe-cell>
                                   <van-cell center>
                                        <template #title>
                                             <van-button icon="plus" @click="addBillRecord" plain block type="primary">
                                                  添加账单记录
                                             </van-button>
                                        </template>

                                   </van-cell>
                              </section>
                         </van-tab>
                    </van-tabs>
                    <!-- <section>

     <van-cell center>
          <template #title>
               <span class="title">费用明细</span>
          </template>

     </van-cell>

     <van-swipe-cell v-for=" item,index in bilRecords" :key="index">
          <van-card num="1" :price="item.price" :desc="item.describe"
               :title="`类型:${useEnum().getRecrodTypeItem(item.type)?.title}`" class="goods-card"
               :thumb="item.img||`https://img2.baidu.com/it/u=2840961417,55008201&fm=253&fmt=auto&app=138&f=JPG?w=500&h=500`" />
          <template #right>
               <van-button square text="删除" type="danger" class="delete-button" />
          </template>
     </van-swipe-cell>
     <van-cell center>
          <template #title>
               <van-button icon="plus" @click="addBillRecord" plain block type="primary">添加账单记录
               </van-button>
          </template>

     </van-cell>
</section> -->
                    <!-- <section>
     <van-cell center>
          <template #title>
               <span class="title">表单信息</span>
          </template>

     </van-cell>
     <TableForm :form="form" />


</section> -->



               </main>

               <footer>

                    <van-action-sheet v-model:show="isShow" title="选择记录类型">
                         <div class="content">
                              <RecrodType @current="handleCurrent">
                              </RecrodType>

                         </div>
                    </van-action-sheet>


                    <van-action-sheet v-model:show="isSysUserShow" title="检索联系人">
                         <SearchContact @on-select="offSysUserShow" />
                    </van-action-sheet>


               </footer>

          </van-skeleton>


     </div>

</template>

<script lang='ts' setup>
import { computed, onActivated, onDeactivated, ref, watchEffect, onMounted } from 'vue';
import type { BillTable } from "@/model/bill/types"
import type { UserInfo } from "@/model/user/types"
import { useUser, useTempTable, useEnum } from '@/store/pinia'
import { useRecrodDialog } from "./hooks/useRecrodDialog"
import RecrodType from './components/RecrodType.vue';

import { useRouter, useRoute } from "vue-router";
import { getDetailById } from "@/api/bill-table-api"
import TableForm from './components/TableForm.vue'
import { showToast } from 'vant';
import SearchContact from './components/SearchContact.vue';


const { isShow, addBillRecord } = useRecrodDialog()
const router = useRouter()
const route = useRoute()
const tempTable = useTempTable()


const isSysUserShow = ref(false)



const active = ref("form")

const form = ref<BillTable>({
     area: '',
     name: '',
     creatorId: '',
     describe: '',
     endTime: 0,
     total: '',
     state: 1,
     bilRecords: [],
     userNum: 0,
     sysUsers: []

})
const totalAmount = computed(() => {

     const priceList = bilRecords.value.map(item => +item.price)
     return priceList.length ? priceList.reduce((total, val) => total + val) : 0
})
const bilRecords = computed(() => {
     return form.value.bilRecords
})
const handleCurrent = (type: number) => {
     router.push({
          path: '/bill/billRecord',
          query: {
               type
          }
     })
     isShow.value = false
}
const deleteRecord = (item: any, index: number) => {
     form.value.bilRecords.splice(index, 1)
}
const getBillTable = async () => {
     const res = await getDetailById({ id: route.query?.id as string })
     form.value = res.result
     return res.result
}
watchEffect(() => {
     form.value.userNum = form.value.sysUsers?.length ?? 0
})
watchEffect(() => {
     form.value.total = totalAmount.value.toString()
})


const offSysUserShow = (user: UserInfo) => {

     if (form.value.sysUsers.every(item => item.id != user.id)) {
          form.value.sysUsers.push(user)
     } else {
          showToast("当前用户已添加")
     }



     isSysUserShow.value = false
}

const loading = ref(false)

router.afterEach((to, from) => {

     console.log(from, 11111111);
     if (from.name != "BillRecord") {
          form.value = tempTable.bill_table
          form.value.creatorId = useUser().sys_user.id as string
          !form.value.sysUsers.length && form.value.sysUsers.push(useUser().sys_user)
     }



})

//通过判断id,进行初始化,如果有Id就请求接口信息,没有读取缓存内信息
onActivated(async () => {




     loading.value = true


     if (route.query?.id) {
          const id = route.query?.id as string

          await getBillTable()


     } else {


     }
     route.query?.active && (active.value = route.query?.active as string ?? 'form')

     loading.value = false

})
onDeactivated(() => {



})


//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>
.bg-white {

     background-color: var(--van-white);
     ;
}

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

nav {
     margin-bottom: 10px;

     .title {
          text-align: center;
          font-size: 18px;
          font-weight: 500;
          margin-bottom: 10px;
     }

     .value {
          text-align: center;
          font-size: 18px;
          font-weight: 500;
     }
}

main {

     section {
          margin-bottom: 10px;

          .title {
               font-size: 18px;
               font-weight: 500;
          }

          .content {
               padding: 5px 5px 160px;
          }

          .goods-card {
               margin: 0;
               background-color: #fff;
          }

          .delete-button {
               height: 100%;
          }
     }


}
</style>