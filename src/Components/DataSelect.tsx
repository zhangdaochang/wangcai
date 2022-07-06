import styled from "styled-components";
import {PX2REM as PX} from "lib/PX2REM";
import {useContext} from "react";
import PageContext from "Components/WritePage/PageContext";

const Wrapper = styled.div`
  height: ${PX(80)};
  text-align: center;
  font-size: ${PX(18)};
  >input{
    margin-left: 10px;
    font-size: ${PX(18)};
  }
`

const DataSelect =()=>{

    const {pageData,setPageData} = useContext(PageContext)


    return(
        <Wrapper>
            <label>日期</label><input onChange={(e)=>{
                setPageData(()=>{return {...pageData,date:e.target.value}})
        }} type="datetime-local" value={pageData.date}/>
        </Wrapper>
    )
}

export default DataSelect