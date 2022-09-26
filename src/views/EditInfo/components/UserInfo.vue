<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-16 11:29:52
 * @LastEditTime: 2022-09-24 23:05:15
 * @LastEditors: Gavin
-->
<template>

  <van-form @failed="onFailed" @submit="onSubmit">
    <van-cell-group inset>
      <!-- 通过 pattern 进行正则校验 -->
      <van-field v-model="form.name" name="name" label="昵称" placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]" />

      <van-field name="gender" label="性别">
        <template #input>
          <van-radio-group v-model="form.gender" direction="horizontal">
            <van-radio :name="1">男</van-radio>
            <van-radio :name="2">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field name="uploader" label="头像上传">
        <template #input>
          <div>
            <van-uploader v-model="fileList"  :after-read="afterRead" :before-read="beforeRead"
              multiple :max-count="count" />
            <p>附件限制：最多1个，单个不超过10M</p>
          </div>
        </template>
      </van-field>

    </van-cell-group>


    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

</template>

<script lang='ts' setup>
import { reactive } from 'vue';
import type { UserInfo } from '@/model/user/types'
import { updateUserInfo } from '@/api/user-api'
import { useRouter } from 'vue-router'
import useUploadAvatar from '@/hooks/useUploadAvatar';
import { useUser } from '@/store/pinia';
const {  fileList, beforeRead, afterRead, count, imageUrl } = useUploadAvatar()
const router=useRouter()

const useStore= useUser()
const form = reactive<UserInfo>({
  id:useStore.sys_user.id,
  avatar: useStore.sys_user.avatar,
  name: useStore.sys_user.name,
  gender: useStore.sys_user.gender
})
fileList.value.push({url:useStore.sys_user.avatar})
const onFailed = (values: any, errors: any) => {
  console.log(values, errors);

}
const onSubmit = async () => {  
  await updateUserInfo(form)
  // await createUserInfo(toRaw(form))
  router.replace({
    name: "User"
  })
  useStore.getUserInfo()
}


    // 校验函数可以返回 Promise，实现异步校验

//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>

</style>