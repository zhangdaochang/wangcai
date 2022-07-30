import { date } from "lib/xxx";
import { useEffect, useState } from "react";
import Layout from "../Components/Layout";
import DataCard from "../Components/Statistics/DataCard";
import StaticsCard from "../Components/Statistics/StaticsCard";
import * as Data from 'MoeyAxios/Data'

function Statistics() {

    let YMDHM= date()
    const [pageData,setPageData]=useState({
      Year:YMDHM.Year<10?'0'+String(YMDHM.Year):String(YMDHM.Year),
      month:YMDHM.Month<10?'0'+String(YMDHM.Month):String(YMDHM.Month),
      incomeValue:'0',
      outgoValue:'0',
      dataList:{},
      type:'outgo'
    })

    const upDataValue = ()=>{
      setPageData((fuck)=>{
        fuck.dataList=Data.getDataList(parseInt(fuck.Year),parseInt(fuck.month)).all()
        let {outgoValue,incomeValue} = Data.getDetailsNumber(fuck.dataList)
        fuck.outgoValue = outgoValue.toFixed(2)
        fuck.incomeValue = incomeValue.toFixed(2)
        return {...fuck}
    })
    }

    useEffect(()=>{upDataValue()},[pageData.type])
    useEffect(()=>{upDataValue()},[pageData.month])
    useEffect(()=>{upDataValue()},[pageData.Year])
    return (
        <Layout>
            <DataCard data-props={{pageData,setPageData}}/>
            <StaticsCard data-props={{pageData,setPageData}}/>
        </Layout>
    )
}

export default Statistics