<!--
 * @Description: 日常账单
 * @Author: Gavin
 * @Date: 2022-08-22 15:48:43
 * @LastEditTime: 2022-09-13 23:11:12
 * @LastEditors: Gavin
-->
<template>

     <div class="home ">


          <header>

               <van-swipe-cell>

                    <van-cell center is-link v-for="item,index in form?.sysUsers" :key="index">
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

               <van-contact-card type="add" />


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

                              <van-swipe-cell  v-for=" item,index in bilRecords" :key="index">
                                   <van-card num="1" :price="item.price" :desc="item.describe"
                                        :title="`类型:${useEnum().getRecrodTypeItem(item.type)?.title}`"
                                        class="goods-card"
                                        :thumb="item.img||`https://img2.baidu.com/it/u=2840961417,55008201&fm=253&fmt=auto&app=138&f=JPG?w=500&h=500`" />
                                   <template #right>
                                        <van-button square text="删除" @click="deleteRecord(item,index)" type="danger" class="delete-button" />
                                   </template>
                              </van-swipe-cell>
                              <van-cell center>
                                   <template #title>
                                        <van-button icon="plus" @click="addBillRecord" plain block type="primary">添加账单记录
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


          </footer>

     </div>

</template>

<script lang='ts' setup>
import { computed, onActivated, onDeactivated, ref ,watchEffect,onMounted} from 'vue';
import type { BillTable } from "@/model/bill/types"
import { useUser, useTempTable, useEnum } from '@/store/pinia'
import { useRecrodDialog } from "./hooks/useRecrodDialog"
import RecrodType from './components/RecrodType.vue';
import { useRouter, useRoute } from "vue-router";
import { getDetailById } from "@/api/bill-table-api"
import TableForm from './components/TableForm.vue'

const { isShow, addBillRecord } = useRecrodDialog()
const router = useRouter()
const route = useRoute()
const tempTable = useTempTable()

const active = ref("form")

const form = ref<BillTable>({
     area: '',
     name: '',
     describe: '',
     startTime: '',
     endTime: '',
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
const deleteRecord=(item:any,index:number)=>{
     form.value.bilRecords.splice(index,1)
}
const getBillTable = async () => {
     const res = await getDetailById({ id: +(route.query?.id ?? 0) })
     return res.result
}
watchEffect(()=>{
     form.value.userNum=form.value.sysUsers.length
})



//通过判断id,进行初始化,如果有Id就请求接口信息,没有读取缓存内信息
onActivated(async () => {


     
     if (route.query?.id) {
          form.value = await getBillTable()
     } else {

          form.value = tempTable.bill_table
          !form.value.sysUsers.length&&form.value.sysUsers.push(useUser().sys_user)
         

     }
     route.query?.active&&(active.value=route.query?.active as string??'form' )


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