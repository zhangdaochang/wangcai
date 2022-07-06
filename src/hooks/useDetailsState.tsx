import {useState} from "react";
import pageContext from "Components/Details/PageContext";

const useDetailsState=()=>{
    let data = JSON.parse(window.localStorage.getItem('AppData') || '')


    const [pageData,setPageData] = useState(data)


    return{pageContext,pageData,setPageData}
}
export {useDetailsState}