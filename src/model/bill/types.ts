/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-06 16:26:25
 * @LastEditTime: 2022-09-24 17:54:43
 * @LastEditors: Gavin
 */




import type { UserInfo} from "@/model/user/types"

export type BillTableInfo={
    id?      : number|string
    name      : string     
	describe  : string      
	endTime   :number
	state     : number  
	userNum   : number 
    sysUsers?  :UserInfo[]  
    area:string   
    creatorId:string
    creator?:UserInfo
    createdAt?:string
    updatedAt?:string   
}

export type BillTable={
    id?      : number|string
	name      : string     
	describe  : string      
	endTime   :number
	state     : number       
	bilRecords: BillRecord[] 
    creatorId:string
    creator?:UserInfo
	userNum   : number  
    total:string  
    area:string    
	sysUsers   :UserInfo[] 
    createdAt?:string
    updatedAt?:string
}

export type BillRecord={
    id?:number|string
    price:string|number
    endTime:number
    creatorId:string
    creator?:UserInfo
    existing:number
    type:number,
    img:string,
    area:string   
    tableId?:string|number,
    describe:string,
    createdAt?:string
    updatedAt?:string
    [key: string]: any  
}