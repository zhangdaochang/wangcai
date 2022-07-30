import styled from "styled-components";
import React from "react";
import {PX2REM as PX} from 'lib/PX2REM'
import CardBottom from "Components/Details/CardBottom";
import {Link} from "react-router-dom";
const Wrapper = styled.div`
  margin: ${PX(28)} auto;
  background-color: white;
  border-radius: 5px;
  >.top{
    background-color: rgba(251, 251, 251, 100);
    height: ${PX(75)};
    line-height: ${PX(75)};
    display: flex;
    justify-content: space-between;
    >.left{
      font-weight:bold;
      font-size: ${PX(16)};
      margin-left:${PX(20)};
    }
    >.right{
      font-size: ${PX(12)};
      margin-right: ${PX(16)};
      >span{
        padding: 2px;
        background-color: rgba(246, 246, 246, 100);
        color: rgba(127, 127, 127, 100);
        margin-left: ${PX(16)};
      }
    }
  }

`
type Props = {
    'data-List':any[]
    'data-typeId':string
}
const Card:React.FC<Props> = (props:Props)=>{
    
    let fuck:any =props['data-List']
    let id = Object.keys(fuck)[0]
    
    let date = new Date(fuck[id].date)
    
    const week = ():string=>{
        let nowDate = new Date()
        let weeked:any = {'0':'星期日','1':'星期一','2':'星期二','3':'星期三','4':'星期四','5':'星期五','6':'星期六'}
        let chinesDay:any = {'0':'今天','-1':"昨天"}

        if(date.getMonth()-nowDate.getMonth()===0){
            let n = date.getDate()-nowDate.getDate() 
            if(n === 0|| n === -1)return chinesDay[n] 
        }
        let day = date.getDay()
        return weeked[day]
    }

    const x = ()=>{
        let outgoValue = 0
        let incomeValue = 0
        Object.keys(fuck).forEach(id=>{
            let output = parseFloat(fuck[id].output)
            fuck[id].amountTypeName==='income'?incomeValue+=output:outgoValue+=output
        })
        return {outgoValue,incomeValue}
    }
    let {outgoValue,incomeValue} = x()

    let typeId = props['data-typeId'];

    return(
        <Wrapper>
            <div className="top">
                <div className="left">{date.getMonth()+1}月{date.getDate()}日&nbsp;&nbsp;{week()}</div>
                <div className="right">
                    {
                        typeId==='all'?<>
                            <span>出</span>{outgoValue.toFixed(2)}
                            <span>入</span>{incomeValue.toFixed(2)}
                        </>:typeId==='outgo'?<><span>出</span>{outgoValue.toFixed(2)}</>:<><span>入</span>{incomeValue.toFixed(2)}</>
                    }
                </div>
            </div>
            {
                 Object.keys(fuck).reverse().map((id,key)=>{
                    return <Link key={key} to={{
                        pathname: "/detailschild",
                        state: {...fuck[id],id:id}
                    }}> <CardBottom data={fuck[id]}/></Link>
                })
            }
        </Wrapper>
    )
}

export default Card