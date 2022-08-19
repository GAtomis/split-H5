/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-02 12:02:32
 * @LastEditTime: 2022-08-18 18:16:48
 * @LastEditors: Gavin
 */
import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import 'vant/es/toast/style'
import { ConfigProvider } from 'vant';
import {setupRouter} from "@/router"
import createPinia from '@/store/pinia/index'

const app=createApp(App)
app.use(createPinia())

app.use(ConfigProvider).use(setupRouter).mount('#app')
