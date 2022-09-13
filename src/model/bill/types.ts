/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-06 16:26:25
 * @LastEditTime: 2022-09-13 16:20:42
 * @LastEditors: Gavin
 */




import type {User} from "@/model/user/types"
export type BillTable={
    id?        : string
	name      : string     
	describe  : string      
	startTime : string
	endTime   :string
	state     : number       
	bilRecords: BillRecrod[] 
	userNum   : number    
    area:string    
	sysUsers   :User[] 
}

export type BillRecrod={
    id?:number|string
    userId:number
    price:number|string
    startTime:string
    existing:number
    type:number,
    img:string,
    area:string   
    tableId?:number,
    describe:string,
    [key: string]: any
}