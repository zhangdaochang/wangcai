import styled from "styled-components";
import {green,PX2REM as PX} from "lib/PX2REM";
import Button from "Components/Button";

const Top = styled.div`
  height: ${PX(276)};
  background-color: ${green};
  >.top{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${PX(104)} ${PX(20)} 0 ${PX(42)};
    >.left{
      >.dataSelect{
        >input{
          color:#fff;
          font-size:${PX(18)};
          color-scheme: dark;
          background: transparent;
        }
      }
    }
  }
  >.bottom{
    font-size: ${PX(14)};
    color:  rgba(255, 255, 255, 40%);
    margin:40px 0 0 44px;
    >div{
      color:  rgba(255, 255, 255, 100);
      font-size:${PX(35)};
      margin-left: ${PX(8)};
      margin-top: ${PX(8)};
    }
  }
  
`

const DataCard = (props:any)=>{
    const {pageData,setPageData} = props['data-props'] 
    return(
        <Top>
            <div className="top">
                <div className="left">
                    <div className="dataSelect">

                      <input onChange={(e)=>{
                          setPageData({...pageData,Year:e.target.value.split('-')[0],month:e.target.value.split('-')[1]})
                      }} value={pageData.Year+'-'+pageData.month} type="month"/>
                    </div>

                    
                </div>
                <div className="right">
                    <Button onclick={()=>{setPageData({...pageData,type:'outgo'})}} className={pageData.type==='outgo'?'active':''} value={'支出'}/>
                    <Button onclick={()=>{setPageData({...pageData,type:'income'})}} className={pageData.type==='outgo'?'':'active'} value={'入账'}/>
                </div>
            </div>

            <div className="bottom">
               {pageData.type==='outgo'?<>共支出<div>{pageData.outgoValue}</div></>:<>共收入<div>{pageData.incomeValue}</div></>} 
            </div>
        </Top>
    )
}

export default DataCard