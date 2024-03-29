import styled from "styled-components";
import {PX2REM as PX} from "lib/PX2REM";
import 'index.scss'
import { deleteIcon, getIconList } from "MoeyAxios/Icon";
const Wrapper = styled.div`
  min-height: 100vh;
  background-color: RGBA(200,200,200,40%);
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: end;
  >div{
      height: ${PX(75)};
      line-height: ${PX(75)};
      text-align: center;
      background-color: white;
      border-bottom: 1px solid #7d7d7d;
  }
  >.remove{
    background-color: red;
    color: white;
  }
`

const TypeNO =(props:any)=>{
    let {pageData,setPageData} = props['data-props']
    let type = pageData.active?'income':'outgo'
    
    return(
        <Wrapper onClick={()=>{setPageData({...pageData,editView:false})}}>
            
            <div onClick={(e)=>{
              e.stopPropagation()
              e.preventDefault()
              setPageData({...pageData,editView:false,addView:true,isAdd:false})
            }} ><span>修改</span></div>
            <div onClick={(e)=>{
              e.stopPropagation()
              e.preventDefault()
              deleteIcon(type,pageData.id.id)
              setPageData({...pageData,iconList:getIconList(type),isAdd:false,editView:false})
            }} className={"remove"}><span>删除</span></div>
            
        </Wrapper>
        
    )
}

export default TypeNO