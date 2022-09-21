<!--
 * @Description: 日常账单
 * @Author: Gavin
 * @Date: 2022-08-22 15:48:43
 * @LastEditTime: 2022-09-21 19:57:49
 * @LastEditors: Gavin
-->
<template>

     <div class="home ">

          <van-skeleton title avatar :row="18" :loading="loading" :class="loading&&'bg-white'">
               <UserCell v-model:form="form" />
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
                              <section>
                                   <van-cell center>
                                        <template #title>
                                             <span class="title">账单信息</span>
                                        </template>

                                   </van-cell>
                                   <TableForm v-model:form="form" style="width: 100%;height: 100%;" />

                              </section>
                         </van-tab>
                         <van-tab :title="'费用记录'" :name="'record'">
                              <section>
                                   <van-cell center>
                                        <template #title>
                                             <span class="title">费用记录</span>
                                        </template>
                                   </van-cell>
                                   <van-swipe-cell v-for=" item,index in bilRecords" :key="index">
                                        <van-card num="1" :price="item.price" :desc="item.describe"
                                             :title="`类型:${useEnum().getRecordTypeItem(item.type)?.title}`"
                                             @click="handleEdit(item)" class="goods-card"
                                             :thumb="item.img||`https://img2.baidu.com/it/u=2840961417,55008201&fm=253&fmt=auto&app=138&f=JPG?w=500&h=500`">
                                             <template #tags>
                                                  <span>创建人：</span>
                                                  <van-tag plain type="primary">{{item.creator?.name}}</van-tag>
                                             </template>
                                        </van-card>
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
               </main>
               <footer>
                    <van-action-sheet v-model:show="isShow" title="选择记录类型">
                         <div class="content">
                              <RecordType @current="handleCurrent">
                              </RecordType>

                         </div>
                    </van-action-sheet>
               </footer>
          </van-skeleton>
     </div>
</template>

<script lang='ts' setup>
import { computed, onActivated, onDeactivated, ref, watchEffect, toRaw } from 'vue';
import type { BillRecord, BillTable } from "@/model/bill/types"
import { useUser, useTempTable, useEnum, useRouteStore } from '@/store/pinia'
import { useRecordDialog } from "./hooks/useRecordDialog"
import RecordType from './components/RecordType.vue';
import UserCell from './components/UserCell.vue'
import { useRouter, useRoute } from "vue-router";
import { getDetailById } from "@/api/bill-table-api"
import TableForm from './components/TableForm.vue'




const { isShow, addBillRecord } = useRecordDialog()
const router = useRouter()
const route = useRoute()
const tempTable = useTempTable()
const routeStore = useRouteStore()

const currentUser = toRaw(useUser().sys_user)


const active = ref("form")
const defaultForm = () => ({
     id: '',
     area: '',
     name: '',
     creatorId: currentUser.id as string,
     creator: currentUser,
     describe: '',
     endTime: 0,
     total: '',
     state: 1,
     bilRecords: [],
     userNum: 0,
     sysUsers: [currentUser]
})

const form = ref<BillTable>({
     ...defaultForm()
})
const totalAmount = computed(() => {
     const priceList = bilRecords.value.map(item => +item.price)
     return priceList.length ? priceList.reduce((total, val) => total + val) : 0
})
const bilRecords = computed(() => form.value.bilRecords)
const handleCurrent = (type: number) => {
     router.push({
          path: '/bill/billRecord',
          query: {
               type,
               mode: "new"
          }
     })
     isShow.value = false
}
const handleEdit = (item: BillRecord) => {
     tempTable.updateBilRecords(item)

     router.push({
          path: '/bill/billRecord',
          query: {
               type: item.type,
               id: item.id,
               mode: "edit"
          }
     })

}
const deleteRecord = (item: any, index: number) => {
     form.value.bilRecords.splice(index, 1)
}
const getBillTable = async (id: string) => {
     const res = await getDetailById({ id })
     Object.keys(form.value).forEach(item => {
          //@ts-ignore
          form.value[item] = res.result?.[item]


     })


}
watchEffect(() => {
     form.value.userNum = form.value.sysUsers?.length ?? 0
})
watchEffect(() => {
     form.value.total = totalAmount.value.toString() || ""
})


const loading = ref(false)

//通过判断id,进行初始化,如果有Id就请求接口信息,没有读取缓存内信息
onActivated(async () => {

     console.log(route);
     loading.value = true


     if (routeStore.fromPage.name != "BillRecord") {
          //直接进入初始化
          form.value = defaultForm()

     } else {
          //BillRecord返回什么都不做

          if (route.query?.active == 'record') {
               //BillRecord页面提交成功时
               const index = form.value.bilRecords.findIndex(item => item?.id == tempTable.bill_record?.id)

               if (index == -1) {
                    form.value.bilRecords.push(tempTable.bill_record)
               } else {
                    form.value.bilRecords.splice(index, 1, tempTable.bill_record)
               }
               route.query?.active && (active.value = route.query?.active as string ?? 'form')


          }
          loading.value = false
          return
     }
     //主键查询详情
     if (route.query?.id) {
          const id = route.query?.id as string
          await getBillTable(id)
     }
     loading.value = false








})
onDeactivated(() => {
     tempTable.updateTable(form.value)
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