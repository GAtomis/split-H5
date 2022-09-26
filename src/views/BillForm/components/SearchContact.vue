<!--
 * @Description: 检索联系人
 * @Author: Gavin
 * @Date: 2022-09-18 23:32:44
 * @LastEditTime: 2022-09-21 11:37:53
 * @LastEditors: Gavin
-->
<template>
  <div>
    <van-search v-model="searchKey" @update:model-value="onInput" placeholder="请输入搜索关键词" />
    <van-contact-list v-model="chosenContactId" add-text="确 定" :list="list" default-tag-text="默认"   @add="onSubmit"  @select="onSelect" />
  </div>
</template>

<script lang='ts' setup>
import { ref ,toRaw,reactive} from 'vue'
import { getInfoListByName } from '@/api/user-api'
import _ from 'lodash'
import type { ContactListItem } from 'vant';
import { useEnum } from "@/store/pinia"

const getInfo = async (searchKey: string) => {
  const { result } = await getInfoListByName({ searchKey })
  list.value = result.map<ContactListItem>(item => {
    return {
      id: item.id as string,
      name: item.name,
      tel: enumStore.genderEnum?.[item.gender] as string
    }
  })
}

const debounce = _.debounce(getInfo, 1000)
const enumStore = useEnum()

const chosenContactId = ref('')
const currentUser=ref<ContactListItem>()
const list = ref<ContactListItem[]>([

]);


const searchKey = ref('')

const onInput: (v: string) => void = (searchKey) => {
  if (searchKey == '') return
  debounce(searchKey)

}
const emit = defineEmits<{
  (e: 'onSelect', user: {id:string,name:string}): void
}>()
const onSelect = (item:any) => {
  currentUser.value=toRaw<ContactListItem>(item)
  

}

const onSubmit = () => {
emit('onSelect',{id:currentUser.value?.id as string,name:currentUser.value?.name as string})
}




//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>

</style>