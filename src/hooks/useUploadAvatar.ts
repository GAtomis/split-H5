/*
 * @Description: 上传头像
 * @Author: Gavin
 * @Date: 2022-09-15 19:05:42
 * @LastEditTime: 2022-09-15 19:09:22
 * @LastEditors: Gavin
 */


import { ref} from 'vue'
import { showToast } from 'vant';

import {upload} from '@/api/upload-api'
import type {
  UploaderFileListItem,
} from 'vant';
export default function () {
  //图片列表
const fileList = ref<UploaderFileListItem[]>([ ]);
const imageUrl =ref('')
const capture:string='camera'
const count=1
const beforeRead = (file:any) => {
  console.warn(file.type !== 'image/png')
  
  if (file.type !== 'image/jpeg'&&file.type !== 'image/png') {
    showToast('请上传 jpg/png 格式图片');
    return false;
  }

  if (file.type>4000000) {
    showToast('请图片不大于4mb');
    return false;
  }
  

  return true;
};
const afterRead=async (item:any) => {
  item.status = 'uploading';
  item.message = '上传中...';
  console.warn(item);
  const formData = new FormData();
  formData.append("smfile",item.file);
  try {
    const res= await upload(formData)
    if (res.success) {
      item.content=res.data?.url
    }else{
      item.content=res?.images
    }
    imageUrl.value=item.content
    item.status = '';
    item.message = '';
    showToast({ type: 'success', message: '上传成功' });
  } catch (error) {
    
  }


 

};

  return {
    capture,
    fileList,
    beforeRead,
    afterRead,
    count,
    imageUrl

  }
}


// <van-field class="magb-10" name="uploader" label="头像上传">
// <template #input>
//   <div>
//     <van-uploader v-model="fileList" :capture="capture" :after-read="afterRead" :before-read="beforeRead"
//       multiple :max-count="count" />
//     <p>附件限制：最多1个，单个不超过10M</p>
//   </div>

// </template>

// </van-field>