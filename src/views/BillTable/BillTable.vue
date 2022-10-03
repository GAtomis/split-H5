<!--
 * @Description: 日常账单
 * @Author: Gavin
 * @Date: 2022-08-22 15:48:43
 * @LastEditTime: 2022-10-03 17:09:57
 * @LastEditors: Gavin
-->
<template>
  <div class="home">
    <van-skeleton
      title
      avatar
      :row="18"
      :loading="loading"
      :class="loading && 'bg-white'"
    >
      <UserCell style="margin-bottom: 10px" v-model:form="form" />
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
                <p class="value">¥{{ totalAmount }}</p>
              </van-col>
              <van-col span="6">
                <p class="title">总计条目</p>
                <p class="value">{{ currentRecords.length }}</p>
              </van-col>
            </van-row>
          </template>
        </van-cell>
      </nav>
      <main>
        <van-tabs v-model:active="active" >
          <van-tab :title="'费用记录'" :name="'record'">
            <section>
              <van-cell center>
                <template #title>
                  <span class="title">费用记录</span>
                </template>
              </van-cell>
              <van-swipe-cell v-for="(item, index) in bilRecords" :key="index">
                <van-card
                  num="1"
                  :price="item.price"
                  :desc="item.describe"
                  :title="`类型:${
                    useEnum().getRecordTypeItem(item.type)?.title
                  }`"
                  @click="handleEdit(item)"
                  class="goods-card"
                  :thumb="
                    item.img ||
                    `https://img2.baidu.com/it/u=2840961417,55008201&fm=253&fmt=auto&app=138&f=JPG?w=500&h=500`
                  "
                >
                  <template #tags>
                    <p style="line-height: 30px">
                      <span class="record-card-tag"
                        >创建人：
                        <van-tag type="primary">
                          {{ item.creator?.name }}
                        </van-tag></span
                      >

                      <span class="record-card-tag"
                        >分摊方式：
                        <van-tag type="success">
                          {{
                            useEnum().existingEnum.find(
                              (im) => im.value == item.existing
                            )?.label ?? '未知'
                          }}
                        </van-tag></span
                      >
                    </p>
                    <!-- 
                                                  <p style="margin-bottom: 5px;">


                                                       <span class="record-card-tag">分摊方式： <van-tag type="success">
                                                                 {{useEnum().existingEnum.find(im=>im.value==item.existing)?.label??"未知"}}
                                                            </van-tag></span>
                                                  </p> -->
                  </template>
                </van-card>
                <template #right>
                  <van-button
                    square
                    text="删除"
                    @click="deleteRecord(item, index)"
                    type="danger"
                    class="delete-button"
                  />
                </template>
              </van-swipe-cell>
              <van-cell center>
                <template #title>
                  <van-button
                    icon="plus"
                    @click="addBillRecord"
                    plain
                    block
                    type="primary"
                  >
                    添加账单记录
                  </van-button>
                </template>
              </van-cell>
            </section>
          </van-tab>
          <van-tab :title="'账单信息'" :name="'form'">
            <section>
              <van-cell center>
                <template #title>
                  <span class="title">账单信息</span>
                </template>
              </van-cell>
              <TableForm
                v-model:form="form"
                style="width: 100%; height: 100%"
              />
            </section>
          </van-tab>

          <van-tab :title="'我的账单'" :name="'mine'">
            <section>
              <van-cell center>
                <template #title>
                  <span class="title">我的费用</span>
                </template>
              </van-cell>
              <van-swipe-cell
                v-for="(item, index) in myRecordList"
                :key="index"
              >
                <van-card
                  num="1"
                  :price="item.price"
                  :desc="item.describe"
                  :title="`类型:${
                    useEnum().getRecordTypeItem(item.type)?.title
                  }`"
                  @click="handleEdit(item)"
                  class="goods-card"
                  :thumb="
                    item.img ||
                    `https://img2.baidu.com/it/u=2840961417,55008201&fm=253&fmt=auto&app=138&f=JPG?w=500&h=500`
                  "
                >
                  <template #tags>
                    <p style="line-height: 30px">
                      <span class="record-card-tag"
                        >创建人：
                        <van-tag type="primary">
                          {{ item.creator?.name }}
                        </van-tag></span
                      >

                      <span class="record-card-tag"
                        >分摊方式：
                        <van-tag type="success">
                          {{
                            useEnum().existingEnum.find(
                              (im) => im.value == item.existing
                            )?.label ?? '未知'
                          }}
                        </van-tag></span
                      >
                    </p>
                  </template>
                </van-card>
                <template #right>
                  <van-button
                    square
                    text="删除"
                    @click="deleteRecord(item, index)"
                    type="danger"
                    class="delete-button"
                  />
                </template>
              </van-swipe-cell>
            </section>
          </van-tab>
        </van-tabs>
      </main>
      <footer>
        <van-action-sheet v-model:show="isShow" title="选择记录类型">
          <div class="content">
            <RecordType @current="handleCurrent"> </RecordType>
          </div>
        </van-action-sheet>
      </footer>
    </van-skeleton>
  </div>
</template>

<script lang='ts' setup>
import { computed, ref, toRaw, onMounted } from 'vue'
import type { BillRecord, BillTable } from '@/model/bill/types'
import { useUser, useTempTable, useEnum, useRouteStore } from '@/store/pinia'
import { useRecordDialog } from './hooks/useRecordDialog'
import { showSuccessToast } from 'vant'
import { useRouter, useRoute } from 'vue-router'
import { getDetailById } from '@/api/bill-table-api'
import { getList } from '@/api/bill-record-api'
import { DeleteItem } from '@/api/bill-record-api'
import RecordType from './components/RecordType.vue'
import UserCell from './components/UserCell.vue'
import TableForm from './components/TableForm.vue'
import { showConfirmDialog } from 'vant'
import dayjs from 'dayjs'

//新建记录弹窗
const { isShow, addBillRecord } = useRecordDialog()
const router = useRouter()
const route = useRoute()
const tempTable = useTempTable()
//路由状态管理
const routeStore = useRouteStore()
//当前登陆用户
const currentUser = toRaw(useUser().sys_user)

const active = ref('record')
const defaultForm = () => ({
  id: '',
  area: '',
  name: '',
  creatorId: currentUser.id as string,
  creator: currentUser,
  describe: '',
  endTime: dayjs().valueOf(),
  total: '',
  state: 1,
  bilRecords: [],
  userNum: 0,
  sysUsers: [currentUser],
})

const form = ref<BillTable>({
  ...defaultForm(),
})
const totalAmount = computed(() => {
  const priceList = currentRecords.value?.map((item) => +item.price)??[]
  return priceList.length ? priceList.reduce((total, val) => total + val).toFixed(2) : 0
})
const currentRecords =computed(()=>{
 return  active.value=='mine'?myRecordList.value:bilRecords.value
})

const bilRecords = computed(() => form.value.bilRecords)
const handleCurrent = (type: number) => {
  router.push({
    path: '/bill/billRecord',
    query: {
      type,
      mode: 'new',
      tableId: form.value.id,
    },
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
      mode: 'edit',
    },
  })
}

const deleteRecord = async (item: BillRecord, index: number) => {
  await showConfirmDialog({
    title: '删除提示',
    message: '您当前进行删除操作删除的记录将无法找回,确认删除么',
  })
  await DeleteItem({ id: item.id as string })
  showSuccessToast('删除成功')
  getBillTable(route.query?.id as string)
}
const getBillTable = async (id: string) => {
  const res = await getDetailById({ id })
  Object.keys(form.value).forEach((item) => {
    //@ts-ignore
    form.value[item] = res.result?.[item]
  })
}

const myRecordList = ref<BillRecord[]>([])
const getRecordListByUser = async (id: string) => {
  const res = await getList(
    { tableId: id, creatorId: currentUser.id as string },
    { page: 1, pageSize: 99 }
  )
  myRecordList.value = res.result.item
}

const loading = ref(false)
onMounted(async () => {
  loading.value = true
  if (route.query?.id) {
    const id = route.query?.id as string
    await getBillTable(id)
    await getRecordListByUser(id)
  }
  //主键查询详情
  loading.value = false
})

//通过判断id,进行初始化,如果有Id就请求接口信息,没有读取缓存内信息

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
      // background-color: #fff;
      background: var(--van-cell-background);
    }

    .record-card-tag {
      margin-right: 10px;
    }

    .delete-button {
      height: 100%;
    }
  }
}
</style>