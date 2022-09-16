/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-06 16:26:25
 * @LastEditTime: 2022-09-16 13:50:29
 * @LastEditors: Gavin
 */




import type {User} from "@/model/user/types"
export type BillTable={
    id?        : number|string
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
    userId:string|number
    price:string|number
    startTime:string
    existing:number
    type:number,
    img:string,
    area:string   
    tableId?:number,
    describe:string,
    [key: string]: any
}