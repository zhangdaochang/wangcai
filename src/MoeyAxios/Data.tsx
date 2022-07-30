
import AppData from 'store/Data.json'
/***
 *  @param year 年份
 *  @param month:月份
 *  @param day: 某一天
 *  @param data : 数据{
 *      id:数据id
 *      bei：数据备注
 *      type:数据类型 income outgo
 *      iconid：iconId
 *      date：数据日期
 *      output：金额
 *  }
 * 
 */
const addDayData = (year:number,month:number,day:number,id:string,data:{bei:string,type:string,iconid:string,date:string,output:string})=>{
    if(!window.localStorage.getItem(String(year)))window.localStorage.setItem(String(year),JSON.stringify(AppData))
    let Data = JSON.parse(window.localStorage.getItem(String(year))||'')
    
    if(!Data.mouth[month]){
        Data.mouth[month]=[]
    }
    if(!Data.mouth[month][day]){Data.mouth[month][day]={}}
    Data.mouth[month][day][id]=data
    window.localStorage.setItem(String(year),JSON.stringify(Data))
}
/**
 * 删除一条数据
 * @param year 年份
 * @param month 月份
 * @param day 某一天
 * @param id 数据id
 */
const delData = (year:number,month:number,day:number,id:string)=>{
    if(!window.localStorage.getItem(String(year)))window.localStorage.setItem(String(year),JSON.stringify(AppData))
    let Data = JSON.parse(window.localStorage.getItem(String(year))||'')
    delete Data.mouth[month][day][id]
    window.localStorage.setItem(String(year),JSON.stringify(Data))
}

/**
 * @param year 年份
 * @param month 月份
 * @param day 某一天
 * @param id 数据id
 * @param data 数据体
 */
const changeData = (year:number,month:number,day:number,id:string,data:{bei:string,type:string,iconid:string,date:string,output:string})=>{
    if(!window.localStorage.getItem(String(year)))window.localStorage.setItem(String(year),JSON.stringify(AppData))
    let Data = JSON.parse(window.localStorage.getItem(String(year))||'')
    Data.mouth[month][day][id]=data

    window.localStorage.setItem(String(year),JSON.stringify(Data))
}
/**
 * @param year 年份
 * @param month 月份
 * @returns all()  other()
 */
const getDataList = (year:number,month:number)=>{
    if(!window.localStorage.getItem(String(year)))window.localStorage.setItem(String(year),JSON.stringify(AppData))
    let Data = JSON.parse(window.localStorage.getItem(String(year))||'')
    
    let func = {
        all:function(){
            let App:any=[]
            try{
                let data = Data['mouth'][month]
                data.forEach((v:[]) => {
                    if(v!==null){
                        App.push(v)
                    } 
                });
            }catch{
                App=[]
            }
            
            return App.reverse()
        },
        other:function(amountTypeName:string,iconid:string){
            let App:any=[]
            try{
                let data = Data['mouth'][month]
                data.forEach((v:any) => {
                    let temp:any = []
                    if(v!==null){
                        Object.keys(v).forEach((id)=>{
                            if(v[id].amountTypeName===amountTypeName && v[id].iconId===iconid){
                                temp.push(v[id]);
                            } 
                        })
                        if(temp.length!==0)App.push(temp)
                    }
                });
            }catch{
                App=[]
            }
            return App
        }
    }
    return func
}
const getDetailsNumber = (list:any)=>{
    let outgoValue = 0
    let incomeValue = 0
    if(!list){
        return {outgoValue,incomeValue}
    }
    list.forEach((value:any) => {
        Object.keys(value).forEach((id)=>{ 
            if(value[id].amountTypeName === "outgo")outgoValue+=parseFloat(value[id].output)
            if(value[id].amountTypeName === "income")incomeValue+=parseFloat(value[id].output)
        })   
    });
    return {outgoValue,incomeValue}
}
/**
 * 
 * @param randomLength 有效位
 * @returns 
 */
const geneId = (randomLength:number)=>{

    return Number(Math.random().toString().substr(3,randomLength) + Date.now()).toString(36)
}


export {addDayData,delData,changeData,getDataList,getDetailsNumber,geneId}