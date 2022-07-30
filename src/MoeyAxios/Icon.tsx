/*****
 * 
 *  type:outgo || income
 *  {id:string;name:string;value:string;iconBac:string;iconFill:string}
 */
const addIcon = (type:string,proper:{id:string;name:string;value:string;iconBac:string;iconFill:string})=>{
    let iconList =JSON.parse( window.localStorage.getItem("IconList") || '')
    iconList[type]['iconList'][proper.id]=proper
    window.localStorage.setItem('IconList',JSON.stringify(iconList))
}

/*****
 *  
 * type:outgo || income
 * id:string
 */
const deleteIcon = (type:string,cid:string)=>{
    let iconList =JSON.parse( window.localStorage.getItem("IconList") || '')
    let Data = JSON.parse(window.localStorage.getItem('AppData')||'')
    Data['mouth'].forEach((month:[])=>{
        if(month){
            month.forEach((day:any)=>{
                if(day && Object.keys(day).length!==0){
                    Object.keys(day).forEach((id)=>{
                        if(day[id].amountTypeName===type && day[id].iconId===cid){
                            delete day[id]; 
                        }
                    })
                    
                }
            })
            
        }
        
    })
    window.localStorage.setItem('AppData',JSON.stringify(Data))
    delete iconList[type]['iconList'][cid]
    window.localStorage.setItem('IconList',JSON.stringify(iconList))
}
/**
 * 
 * @param type outgo | income
 * @param proper iconData
 */
const changeIcon =(type:string,proper:{id:string;name:string;value:string;iconBac:string;iconFill:string})=>{
    let iconList =JSON.parse( window.localStorage.getItem("IconList") || '')
    iconList[type]['iconList'][proper.id]=proper
    window.localStorage.setItem('IconList',JSON.stringify(iconList))
}

/**
 * 
 * @param type outgo | income
 * @param id  iconId
 * @returns {name,value,href}
 */
const getIcon =(type:string,id:string)=>{
    let iconList =JSON.parse( window.localStorage.getItem("IconList") || '')
    let temp = iconList[type]['iconList'][id]
    return {name:temp.name,value:temp.value,href:temp.href}
}

/**
 * 
 * @param type outgo | income
 * @returns iconList[]
 */
const getIconList=(type:string)=>{
    let iconList =JSON.parse( window.localStorage.getItem("IconList") || '')
    let IconListArray:any[] = []
    Object.keys(iconList[type]['iconList']).forEach((k:string)=>{
        IconListArray.push(iconList[type]['iconList'][k])
    })
    return IconListArray
    
}

export {addIcon,deleteIcon,changeIcon,getIcon,getIconList}
