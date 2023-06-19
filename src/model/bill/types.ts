/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-09-06 16:26:25
 * @LastEditTime: 2023-06-14 12:08:36
 * @LastEditors: GAtomis 850680822@qq.com
 */




import type { UserInfo} from "@/model/user/types"
import type {PrimaryKey} from '@/model/common/types'
export type BillTableInfo={
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
}&PrimaryKey

export type BillTable={
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
}&PrimaryKey

export type BillRecord={
    ID?:number|string
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
}&PrimaryKey