/*
 * @Description: vite配置
 * @Author: Gavin
 * @Date: 2022-08-02 12:02:32
 * @LastEditTime: 2022-08-04 15:20:57
 * @LastEditors: Gavin
 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"



// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')
  return {
    base: './', //绝对路径配置根据ngxin
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {},
          javascriptEnabled: true,
        },
        scss: {
          additionalData: `
          @use 'sass:math';
          @import "src/styles/global.scss";
          `,
        },
      },
    },
    server: {

      open: true,

      proxy: {

        '/cn/v1.0/projects': {
          target: 'https://api.agora.io',
          changeOrigin: true,
        },
        '/api/user': {
          target: 'http://localhost:8888',
          changeOrigin: true,
        },
        '/api/role': {
          target: 'http://localhost:8888',
          changeOrigin: true,
        },
        '/api/getToken': {
          target: 'http://localhost:9999',
          changeOrigin: true,
        },
      },
    },
    plugins: [vue()]

  }



})
