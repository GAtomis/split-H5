/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-02 17:01:47
 * @LastEditTime: 2022-08-09 17:11:56
 * @LastEditors: Gavin
 */

import { encode, decode } from 'js-base64';
import { sha256 } from 'js-sha256';



/**
 * @description: 本地加密Token
 * @param {*} customerKey // 客户 ID
 * @param {*} customerSecret // 客户密钥
 * @return {*}
 * @Date: 2022-08-02 17:16:12
 */
export function getBase64(customerKey = "14a95f7721244ca2a74aae29e40b01aa", customerSecret = "3fd5834ed2c041aaac44da0a4294e753") {
  // 拼接客户 ID 和客户密钥
  const plainCredential = customerKey + ":" + customerSecret
  // 使用 base64 进行编码
  const encodedCredential = encode(plainCredential)
  return "Basic " + encodedCredential
}

export function createSignature<T extends any>(data: any) {
  const RuleList = [
    "appId",
    "gameId",
    "roomId",
    "userId",
    "role",
    "expireTime",
    "timestamp",
  ].sort()
  const res = RuleList.map(item => {
    return `${item}=${data?.[item] ?? "null"}`


  }).join("&")
  console.log(res);


  return sha256(res)


}