import styled from "styled-components";
import {PX2REM as PX} from "lib/PX2REM";
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


const TypeSelect = (props)=>{

    const {pageData,setPageData}=props['data-props']
    let IconList = JSON.parse(window.localStorage.getItem('IconList') || '')

    return(
        <Wrapper onClick={()=>{props['data-props'].setPageData({...props['data-props'].pageData,isShow:false})}}>
            <div>
                <Div onClick={(e)=>{
                    e.stopPropagation()
                    e.preventDefault()
                    setPageData({...pageData,typeName:'全部类型',typeId:'all',isShow:false})
                    }}>全部类型</Div>
                <Div onClick={e=>{
                    e.stopPropagation()
                    e.preventDefault()
                }}>支出</Div>
                <div onClick={(e)=>{
                    e.stopPropagation()
                    e.preventDefault()
                    setPageData((fuck)=>{
                        fuck.isShow=false
                        fuck.typeName=e.target['innerText']
                        fuck.typeId='outgo'
                        fuck.iconId=e.target.getAttribute('data-id')
                       return {...fuck}
                    })
                }}>
                    {
                            Object.keys(IconList['outgo']['iconList']).map((key)=>{
                                let data = IconList['outgo']['iconList'][key];
                                return <Span data-id={data.id} key={key}> {data.value} </Span>
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
                    setPageData((fuck)=>{
                        fuck.isShow=false
                        fuck.typeName=e.target['innerText']
                        fuck.typeId='income'
                        fuck.iconId=e.target.getAttribute('data-id')
                       return {...fuck}
                    })
                }}>
                    {
                        Object.keys(IconList['income']['iconList']).map((key)=>{
                            let data = IconList['income']['iconList'][key];
                            return <Span data-id={data.id} key={key}>{data.value}</Span>
                        })
                    }
                </div>
            </div>
        </Wrapper>
    )
}
export default TypeSelect