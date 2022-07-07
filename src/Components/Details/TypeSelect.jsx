import styled from "styled-components";
import {PX2REM as PX} from "lib/PX2REM";
import {useContext} from "react";
import pageContext from "Components/Details/PageContext";
import Span from 'Components/Details/Span'

const Wrapper = styled.div`
  background-color: RGBA(200,200,200,40%);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  >div{
    padding: ${PX(10)};
    height: ${PX(600)};
    overflow-y: scroll;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  
`
const Div = styled.div`
  background-color: white;
  font-size: ${PX(24)};;
  height: ${PX(80)};
  line-height: ${PX(80)};;
  color: black;
  text-align: center;
  margin-top: 10px;
`


const TypeSelect = ()=>{

    const {pageData,setPageData}=useContext(pageContext)
    let IconList = JSON.parse(window.localStorage.getItem('IconList') || '')

    return(
        <Wrapper onClick={()=>{setPageData({...pageData,isShow:false})}}>
            <div>
                <Div onClick={(e)=>{
                    e.stopPropagation()
                    e.preventDefault()
                    setPageData({...pageData,typeName:'全部类型',isShow:false,typeId:'all'})}}>全部类型</Div>
                <Div onClick={e=>{
                    e.stopPropagation()
                    e.preventDefault()
                }}>支出</Div>
                <div onClick={(e)=>{
                    e.stopPropagation()
                    e.preventDefault()
                    setPageData(()=>{return {...pageData,typeName:e.target['innerText'],isShow:false,typeId:'outgo',iconId:e.target.getAttribute('data-id')}})
                }}>
                    {
                        IconList['outgo']['iconList'].map((data,key)=>{
                            return <Span data-id={data.id} key={key}>{data.value}</Span>;

                        })
                    }
                </div>
                <Div onClick={e=>{
                    e.stopPropagation()
                    e.preventDefault()
                }}>收入</Div>
                <div onClick={(e)=>{
                    e.stopPropagation()
                    e.preventDefault()
                    setPageData(()=>{return {...pageData,typeName:e.target['innerText'],isShow:false,typeId:'income',iconId:e.target.getAttribute('data-id')}})
                }}>
                    {
                        IconList['income']['iconList'].map((data,key)=>{
                            return (
                                <Span data-id={data.id} key={key}>{data.value}</Span>
                            )
                        })
                    }
                </div>
            </div>
        </Wrapper>
    )
}
export default TypeSelect