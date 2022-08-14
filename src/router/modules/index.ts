/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-01-24 14:34:43
 * @LastEditTime: 2022-08-14 14:31:32
 * @LastEditors: Gavin
 */

type File={default:ExpandRouteRecordRaw[]}
export const allModules= import.meta.glob('./*.ts',{ eager: true })
// import { useBubblingSort } from '@/hooks/global/common'
const modules: any = {}

import { ExpandRouteRecordRaw } from '@/model/router'

let modulesList: Array<ExpandRouteRecordRaw> = []
// Object.keys(allModules).forEach((path) => {
//   const fileName = path.split('/')[1]
//   modules[
//     `${allModules[path].default?.meta?.point ?? 0}${fileName.split('.')[0]}`
//   ] = allModules[path][fileName] || allModules[path].default || allModules[path]

//   if (Array.isArray(allModules[path].default as Array<ExpandRouteRecordRaw>)) {
//     modulesList = [
//       ...modulesList,
//       ...(allModules[path].default as Array<ExpandRouteRecordRaw>),
//     ]
//   }
// })

export function getModel() {
  const res=  Object.values<any>(allModules).map((item)=>{
 
    return item.default as ExpandRouteRecordRaw[]
})
let newRes:ExpandRouteRecordRaw[]=[]
res.forEach(item=>{
  newRes=newRes.concat(item)
})

return newRes
}

// export default useBubblingSort<ExpandRouteRecordRaw>(modulesList, (arr, j) => {
//   if ((arr[j].meta?.sortIndex ?? 0) > (arr[j + 1].meta?.sortIndex ?? 0)) {
//     const temp = arr[j]
//     arr[j] = arr[j + 1]
//     arr[j + 1] = temp
//   }
// })