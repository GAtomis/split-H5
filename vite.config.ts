/*
 * @Description: vite配置
 * @Author: Gavin
 * @Date: 2022-08-02 12:02:32
 * @LastEditTime: 2022-08-14 12:16:23
 * @LastEditors: Gavin
 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
import postcsspxtoviewport from 'postcss-px-to-viewport'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'


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
      postcss: {
        plugins: [
          postcsspxtoviewport({
            unitToConvert: 'px', // 要转化的单位
            viewportWidth: 375, // UI设计稿的宽度
            unitPrecision: 6, // 转换后的精度，即小数点位数
            propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
            viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
            fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
            selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
            minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
            mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
            replace: true, // 是否转换后直接更换属性值
            // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
            exclude: [],
            landscape: !false, // 是否处理横屏情况
            landscapeUnit:'vw', // (String) 横屏时使用的单位
            landscapeWidth: 667 // (Number) 横屏时使用的视口宽度
                 
          })
        ]
      }
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
    plugins: [vue(),
      Components({
        resolvers: [VantResolver()]
      })
    ]

  }



})
