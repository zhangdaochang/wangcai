import {useEffect, useState} from "react";
import Layout from "Components/Layout";
import Top from "Components/Details/Top/Top";
import Card from "Components/Details/Card";
import WriteM from "Components/Details/WriteM";
import styled from "styled-components";
import {PX2REM} from "../lib/PX2REM";
import WritePage from "./WritePage/WritePage";
import {date} from 'lib/xxx'
import IconList from "store/IconList.json";
import AppData from 'store/Data.json'
import * as Data from 'MoeyAxios/Data'
import { getIconList } from "MoeyAxios/Icon";
const Write = styled(WriteM)`
  position: absolute;
  bottom: 200px;
  right: 40px;
`

const Div = styled.div`
text-align: center;
margin-top: 22px;
`

const Bottom = styled.div`
  height: ${PX2REM(620)};
  overflow-y: scroll;
`



const init = ()=>{
    let {Year} = date()
    let isFirst = window.localStorage.getItem("IconList")
    if (!isFirst){
        window.localStorage.setItem('IconList',JSON.stringify(IconList))
        window.localStorage.setItem(String(Year),JSON.stringify(AppData))
        return 
    }
}
function Details(){
    init()
    let YMDHM= date()

    const [isShow,setIsShow]=useState(false)
    const [pageData,setPageData] = useState({
        dataList:Data.getDataList(YMDHM.Year,YMDHM.Month).all(),
        typeId:'all',
        isShow:false,
        typeName:'全部类型',
        Year:YMDHM.Year<10?'0'+String(YMDHM.Year):String(YMDHM.Year),
        month:YMDHM.Month<10?'0'+String(YMDHM.Month):String(YMDHM.Month),
        iconId:'',
        outgoValue:'0',
        incomeValue:'0'
    })
    const [writeData,setWriteData] = useState({
        amountTypeName:'outgo',
        output:'',
        iconId:'',
        bei:'',
        iconList:getIconList('outgo'),
        date:''
    })

    const upDataList =()=>{
        setPageData((fuck)=>{
            fuck.dataList=Data.getDataList(parseInt(fuck.Year),parseInt(fuck.month)).all()
            let {outgoValue,incomeValue} = Data.getDetailsNumber(fuck.dataList)
            fuck.outgoValue = outgoValue.toFixed(2)
            fuck.incomeValue = incomeValue.toFixed(2)
            return {...fuck}
        })
    }
    useEffect(()=>{
        setPageData((fuck)=>{
            if (fuck.typeId==='all'){fuck.dataList=Data.getDataList(parseInt(fuck.Year),parseInt(fuck.month)).all()}
            if (fuck.typeId==='outgo'){fuck.dataList=Data.getDataList(parseInt(fuck.Year),parseInt(fuck.month)).other('outgo',fuck.iconId)}
            if (fuck.typeId==='income'){fuck.dataList=Data.getDataList(parseInt(fuck.Year),parseInt(fuck.month)).other('income',fuck.iconId)}
            let {outgoValue,incomeValue} = Data.getDetailsNumber(fuck.dataList)
            fuck.outgoValue = outgoValue.toFixed(2)
            fuck.incomeValue = incomeValue.toFixed(2)
            return {...fuck}
        })
    },[pageData.typeName])
    useEffect(()=>{upDataList()},[pageData.month])
    useEffect(()=>{upDataList()},[pageData.Year])
    useEffect(()=>{upDataList()},[isShow])
    
    return(
        <Layout>
            {isShow?<WritePage data-props={{writeData,setWriteData}} setIsShow={setIsShow}/>:""}
            <Top data-props={{pageData,setPageData}}/>
            <Bottom>
                <Div>{pageData.dataList.length===0?'无数据':''}</Div>
                {
                    pageData.dataList.map((data:any,key:number)=>{
                        if(Object.keys(data).length!==0){
                            return <Card key={key} data-typeId={pageData.typeId} data-List={data}/>
                        }
                    })
                }
                {!isShow?<Write onClick={()=>{
                    setIsShow(true)
                    setPageData({...pageData})
                }}/>:''}
            </Bottom>
        </Layout>
    )
}

export default Details