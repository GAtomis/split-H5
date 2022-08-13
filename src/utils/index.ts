/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-09 18:26:18
 * @LastEditTime: 2022-08-09 18:30:05
 * @LastEditors: Gavin
 */
export function getUrlOrigin(url: string) {



  var domain: string[] | string = url.split("/")

  if (domain[2]) {

    domain = `${domain[0]}//${domain[2]}`

  } else {

    domain = ''; //如果url不正确就取空

  }
  return domain

}