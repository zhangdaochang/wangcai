import IconList from "store/IconList.json";
import AppData from 'store/Data.json'
const init = ()=>{
    let isFirst = window.localStorage.getItem("IconList")

    if (!isFirst){
        window.localStorage.setItem('IconList',JSON.stringify(IconList))
        window.localStorage.setItem('AppData',JSON.stringify(AppData))
    }
}

export default init