
/*
*  <Icon name={'shopcar'} value={'购物'} iconBac={'rgba(98, 179, 123, 100)'}/>
*  name：icon 图标
*  value：图标下的文字
*  iconBac: 图标颜色
*
* */


import styled from "styled-components";
import {PX2REM} from "../lib/PX2REM";
import React from "react";

let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('Icons', true, /\.svg$/));} catch (error) {console.log(error);}

const Wrapper:any = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    >div{
      width: ${PX2REM(44)};
      height: ${PX2REM(44)};
      background-color: ${(props:any) => props.iconBac?props.iconBac:''};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      justify-items: center;
      margin-bottom: 8px;
      >.icon{
        fill: ${(props:any) => props.iconFill?props.iconFill:''};
        width: ${PX2REM(24)};
        height: ${PX2REM(24)};
      }
    }
    &.test{
      display: block;
      >div{
        background-color: unset;
        margin:0;
        >.icon{
          width: ${PX2REM(24)};
          height: ${PX2REM(24)};
          fill: ${(props:any) => props.iconFill?props.iconFill:''};
        }
      }
    }
`

const Icon:any = (props:any)=>{
    return(
        <Wrapper iconFill={props.iconFill} iconBac={props.iconBac} className={props.iconBac?'':'test'} >
            <div>
                <svg className="icon">
                    <use xlinkHref={'#' + props.name}/>
                </svg>
            </div>
            {
                props.value?<span>{props.value}</span>:''
            }
        </Wrapper>
    )
}

export default Icon