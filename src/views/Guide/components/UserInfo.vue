<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-16 11:29:52
 * @LastEditTime: 2022-09-16 17:01:34
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
            <van-radio name="1">男</van-radio>
            <van-radio name="2">女</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field name="uploader" label="头像上传">
        <template #input>
          <div>
            <van-uploader v-model="fileList" :capture="capture" :after-read="afterRead" :before-read="beforeRead"
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
import { reactive, toRaw } from 'vue';
import type { UserInfo } from '@/model/user/types'
import { createUserInfo } from '@/api/user-api'
import { useRouter } from 'vue-router'
import useUploadAvatar from '@/hooks/useUploadAvatar';
const { capture, fileList, beforeRead, afterRead, count, imageUrl } = useUploadAvatar()
const router=useRouter()
const form = reactive<UserInfo>({
  avatar: "",
  name: "",
  gender: 1
})
const onFailed = (values: any, errors: any) => {
  console.log(values, errors);
  router.replace({
    name: "Home"
  })
}
const onSubmit = async () => {
  await createUserInfo(toRaw(form))
  router.replace({
    name: "Home"
  })
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