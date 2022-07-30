const date = (time?:string) => {
    let date = time?new Date(time):new Date()
    let x = {
        Year: date.getFullYear(),
        Month: date.getMonth()+1,
        day: date.getDate(),
        hours:date.getHours(),
        minutes:date.getMinutes()
    }
    return x
}



const getIconDetail=(data:any)=>{
    const iconList = JSON.parse(window.localStorage.getItem('IconList')||'')
    let name = ''
    let iconValue = ''
    iconList[data.typeName].iconList.forEach((da:any)=>{
        if(data.iconId===da.id){
            name = da.name
            iconValue = da.value
        }
    })
    return {name,iconValue}
}


export {date,getIconDetail}