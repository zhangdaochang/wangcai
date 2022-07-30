import styled from "styled-components";
import {PX2REM as PX} from "lib/PX2REM";
import Space from "Components/Space";
import {ChangeEvent} from "react";

const Wrapper = styled.div`
  padding: 0 20px 0 20px;
  height: ${PX(122)};
  display: flex;
  flex-direction: column;
  
  >textarea{
    width:100%;
    height: ${PX(100)};
    font-size: ${PX(16)};
  }
`



const Textarea = (props:any)=>{
    const {pageData,setPageData} = props['data-props']

    const onchange = (v:ChangeEvent<HTMLTextAreaElement>)=>{
        setPageData(()=>{ return {...pageData,bei:v.target.value} })
    }
    return(
        <Wrapper>
            <label>{props.name}</label>
            <Space/>
            <textarea onChange={onchange} value={pageData.bei}/>
        </Wrapper>
    )
}

export default Textarea