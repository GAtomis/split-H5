/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-02 15:21:07
 * @LastEditTime: 2022-08-09 17:26:49
 * @LastEditors: Gavin
 */


import http from "@/utils/request-api"
import { getBase64, createSignature } from "@/utils/client"
export type GameUrl = {

  role: '1' | '2' | '3' //房主1 对手2 观众3
  timestamp: any
  expireTime: any
  userId: string,
  installId: string

}
const appId = "14a95f7721244ca2a74aae29e40b01aa",
  gameId = "a0609d6439d3494ea7ad70ca7ffcc8a3",
  roomId = "agora",
  secretId = "3fd5834ed2c041aaac44da0a4294e753",
  name = "Gavin",
  avatar = "https://avatars.githubusercontent.com/u/40788938?v=4"


export function getGameUrl({ userId, ...params }: GameUrl, token: string) {

  const hostname = 'https://api.agora.io',
    path = `/${appId}/game-service/games/${gameId}/rooms/${roomId}/users/${userId}/join`
  return http.request<any, { data: { expireTime: number, joinUrl: string } }>({
    url: path,
    params,
    method: "POST",
    headers: {

      "x-agora-uid": "zhounan",
      "x-agora-game-signature": createSignature({
        userId, ...params, appId, gameId, roomId, name,
        avatar
      }),
      "x-agora-token": token

    },
    data: {
      name,
      avatar

    }

  })

}
type callRq = {
  result: string
}
// export function getRTMToken(params: any) {
//   const data = {
//     "user_id": params.userId,
//     "app_id": gameId
//   },
//     hostname = 'https://agoraktv.xyz',
//     path = '/1.1/functions/token';
//   return http.request<any, callRq>({
//     baseURL: hostname,
//     url: path,
//     method: "POST",
//     data,
//     headers: {
//       "X-LC-Id": "fkUjxadPMmvYF3F3BI4uvmjo-gzGzoHsz",
//       "X-LC-Key": "QAvFS62IOR28GfSFQO5ze45s",
//       "X-LC-Session": "qmdj8pdidnmyzp0c7yqil91oc",
//       'Content-Type': "application/json;charset=UTF-8",
//       "Content-Length": Object.keys(data).length
//     },



//   })

// }

type ReqToken = {
  data: string
}
export function getToken(userId: string) {
  const data = {
    userId,
    "appid": appId,
    "appsecrt": secretId
  }
  return http.request<any, ReqToken>({
    baseURL: "/api",
    url: "/getToken",
    method: "POST",
    data
  })

}