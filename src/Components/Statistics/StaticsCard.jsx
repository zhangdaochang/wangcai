import styled from "styled-components";
import {useEffect, useRef} from "react";
import * as echarts from 'echarts';
import {option} from "store/statiStore";
import {PX2REM} from "lib/PX2REM";
import { getIconList } from "MoeyAxios/Icon";
import { getDataList, getDetailsNumber } from "MoeyAxios/Data";
const Wrapper = styled.div`
    >div{
      min-height: ${PX2REM(520)};
      padding: 10px;
    }
`

const StaticsCard = (props)=>{
    const {pageData} = props['data-props']
    const container = useRef()
    const list = getIconList(pageData.type)
    
    const upDataStatics = ()=>{
        let listName=list.map((data)=>{
            return data.value
        })
        let listId = list.map((data)=>{
            return data.id
        })
        let listData=listId.map((data)=>{
            return getDataList(parseInt(pageData.Year),parseInt(pageData.month)).other(pageData.type,data)
        })
        let listValue = listData.map((data)=>{
           let {outgoValue,incomeValue} = getDetailsNumber(data);
           if(pageData.type==='outgo')return outgoValue
           return incomeValue
        })
        
        let listNV = listName.map((data,key)=>{
            return {value:listValue[key],name:data}
        })
        option.title.text=pageData.type==='income'?'收入构成':'支出构成'
        option.yAxis.data=listName
        option.series[0].data=listValue
        option.series[1].data=listNV
        echarts.init(container.current).setOption(option)
    }
   
    useEffect(()=>{upDataStatics()},[pageData.type])
    useEffect(()=>{upDataStatics()},[pageData.Year])
    useEffect(()=>{upDataStatics()},[pageData.month])
    return(
        <Wrapper>
           <div ref={container}/>
        </Wrapper>
    )
}

export default StaticsCard