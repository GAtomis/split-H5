/*
 * @Description: vite配置
 * @Author: Gavin
 * @Date: 2022-08-02 12:02:32
 * @LastEditTime: 2023-06-13 19:40:43
 * @LastEditors: GAtomis 850680822@qq.com
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
  const env = loadEnv(mode, process.cwd())
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
            landscape: false, // 是否处理横屏情况
            landscapeUnit:'vw', // (String) 横屏时使用的单位
            landscapeWidth: 667 // (Number) 横屏时使用的视口宽度
                 
          })
        ]
      }
    },
    server: {

      open: true,
      port:env.VITE_CLI_PORT,
      proxy: {

        // 把key的路径代理到target位置
        // detail: https://cli.vuejs.org/config/#devserver-proxy
        [env.VITE_BASE_API]: { // 需要代理的路径   例如 '/api'
          target: `${env.VITE_BASE_PROXY}:${env.VITE_SERVER_PORT}`, // 代理到 目标路径
          changeOrigin: true,
          rewrite: path => path.replace(new RegExp('^' + env.VITE_BASE_API), ''),
        },
        '/upload':{
          target: 'https://smms.app/api/v2',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/upload/, '')


        }
           
      },
    },
    plugins: [vue(),
      Components({
        resolvers: [VantResolver()]
      })
    ]

  }



})
