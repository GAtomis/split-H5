<!--
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-02 14:53:11
 * @LastEditTime: 2022-08-10 19:59:36
 * @LastEditors: Gavin
-->
<template>
  <div style="width:350px; height:500px; ">


    <iframe v-if="url" width="100%" height="100%" id="G1" :src="url" frameborder="0"></iframe>
    <el-empty style="width:100%; height:100%" v-else description="description" />
  </div>
  <div class="control">

    <el-row>
      <el-col :span="2">
        准备页面
      </el-col>
      <el-col :span="4">
        <div class="control-btn">
          <el-button @click="createGame">创建游戏</el-button>
        </div>
        <div class="control-btn">
          <el-button @click="setGuard('left')">放置/移除左护卫</el-button>
        </div>
        <div class="control-btn">
          <el-button @click="setGuard('right')">放置/移除右护卫</el-button>
        </div>
        <div class="control-btn">
          <el-button @click="createGame">提出阵营列表中的玩家</el-button>
        </div>
      </el-col>
      <el-col :span="4">
        <el-button @click="createGame">开始游戏/接受B对决</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script lang='ts' setup>

import { getToken, getGameUrl } from "@/api/game-api"
import dayjs from "dayjs"
import UTC from "dayjs/plugin/UTC"
import { ref, onMounted } from "vue"
import { getUrlOrigin } from "@/utils"
dayjs.extend(UTC)


const url = ref<string>("")

const targetorigin:string= window.location.origin
window.addEventListener('message', e => {
  // origin
 console.error(e.origin) //
  console.error(e)  //

},false)

const createGame = async () => {
  const { data } = await getToken("zhounan")
  if (data) {
    const res = await getGameUrl({ role: "1", timestamp: dayjs().valueOf(), expireTime: dayjs("2022-09-08 19:16:39").valueOf(), userId: "zhounan", installId: "zhounan" }, data)
    console.warn(res);

    url.value = res.data.joinUrl+"&targetorigin="+targetorigin

  }
}
const setGuard = (direction: string) => {
  const data = {GAME_STATE:{"state":"app_common_self_in","data":{"isIn":true}}}
  const dom = document.getElementById("G1") as HTMLIFrameElement
  console.log(getUrlOrigin(url.value));

  dom.contentWindow!.postMessage(JSON.stringify(data), getUrlOrigin(url.value));
}


onMounted(async () => {




})

//expects props options
/*const props = defineProps({
foo: String
})*/
//expects emits options
//const emit = defineEmits(['update', 'delete'])
</script>

<style scoped lang='scss'>
.control {

  &-btn {
    margin-bottom: 5px;
  }
}
</style>