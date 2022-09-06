/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-12-31 13:41:15
 * @LastEditTime: 2022-09-06 15:01:07
 * @LastEditors: Gavin
 */

import { createPinia } from 'pinia'


import useUser from './user'
import useEnum from './enum'


// const usePinia = () => {
//   //   Object.keys(allModules).forEach((path) => {
//   //     const fileName = path.split('/')[1]
//   //     modules[fileName.split('.')[0]] = allModules[path][fileName] || allModules[path].default || allModules[path]
//   //     console.log(modules);
//   //   })

//   return createPinia()
// }
export {useUser,useEnum}

export default createPinia
