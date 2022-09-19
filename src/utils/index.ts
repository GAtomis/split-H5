/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-08-09 18:26:18
 * @LastEditTime: 2022-09-19 18:32:42
 * @LastEditors: Gavin
 */

export const getCaptchaUrl=()=>import.meta.env.VITE_BASE_API + 'base/code'+`?v=${Math.random()}`



export const baseUrlwhiteList=['upload']
export const successCode=['0','200','image_repeated','success']





export function  debounceByPromise(method:any, wait:number, immediate = false):any {
  let timeout:any, result;
  let debounced:any = function(...args:any[]) {
      // 返回一个Promise，以便可以使用then或者Async/Await语法拿到原函数返回值
      return new Promise(function(this:any,resolve ){
          let context:any = this ;
          if (timeout) {
              clearTimeout(timeout);
          }
          if (immediate) {
              let callNow = !timeout;
              timeout = setTimeout(() => {
                  timeout = null;
              }, wait);
              if (callNow) {
                  result = method.apply(context, args);
                  // 将原函数的返回值传给resolve
                  resolve(result);
              }
          } else {
              timeout = setTimeout(() => {
                  result = method.apply(context, args);
                  // 将原函数的返回值传给resolve
                  resolve(result);
              }, wait);
          }
      });
  };
  // @ts-ignore
  debounce.cancel = function() {
      clearTimeout(timeout);
      timeout = null;
  };

  return debounced;
}
