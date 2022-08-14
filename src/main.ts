/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-02 12:02:32
 * @LastEditTime: 2022-08-14 17:15:36
 * @LastEditors: Gavin
 */
import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import 'vant/es/toast/style'
import { ConfigProvider } from 'vant';
import {setupRouter} from "@/router"

const app=createApp(App)

app.use(ConfigProvider).use(setupRouter).mount('#app')
