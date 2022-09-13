/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-07 18:01:50
 * @LastEditTime: 2022-09-09 18:30:02
 * @LastEditors: Gavin
 */

import { ref,onMounted} from 'vue'
import { showToast } from 'vant';
import { showNotify } from 'vant';
import {upload,getToken} from '@/api/upload-api'
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

// onMounted(()=>{
//   getToken()


// })

   // 返回布尔值
// const beforeRead = (file) => {
//   if (file.type !== 'image/jpeg') {
//     showToast('请上传 jpg 格式图片');
//     return false;
//   }
//   return true;
// };


  return {
    capture,
    fileList,
    beforeRead,
    afterRead,
    count,
    imageUrl

  }
}