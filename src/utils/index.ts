/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-09 18:26:18
 * @LastEditTime: 2023-06-13 19:03:43
 * @LastEditors: GAtomis 850680822@qq.com
 */

export const getCaptchaUrl=()=>import.meta.env.VITE_BASE_API + '/base/code'+`?v=${Math.random()}`



export const baseUrlwhiteList=['upload']
export const successCode=['0','200','image_repeated','success']


