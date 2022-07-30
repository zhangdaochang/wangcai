
/*
*  <Icon ?href={''} ?name={'shopcar'} value={'购物'} iconFill={'rgba(98, 179, 123, 100)'} iconBac={'rgba(98, 179, 123, 100)'}/>
*  href: base64
*  name：icon 图标
*  value：图标下的文字
*  iconBac: 图标背景颜色
*  iconFill: 图标颜色
* */


import styled from "styled-components";
import {PX2REM} from "lib/PX2REM";

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
      flex-direction: column;
      justify-content: center;
      justify-items: center;
      margin-bottom: 8px;
      >.icon{
        fill: ${(props:any) => props.iconFill?props.iconFill:''};
        width: ${(props:any) => props.width?PX2REM(props.width):PX2REM(30)};
        
      }
      >img{
        display:block;
        fill: ${(props:any) => props.iconFill?props.iconFill:''};
        width: ${(props:any) => props.width?PX2REM(props.width):PX2REM(30)};
        margin:0 auto;
      }
    }
    &.test{
      display: flex;
      >div{
        background-color: unset;
        margin:0;
        >.icon{
          width: ${(props:any) => props.width?PX2REM(props.width):PX2REM(30)};
          fill: ${(props:any) => props.iconFill?props.iconFill:''};
        }
      }
    }
    >span{
      margin-top:5px;
    }
`

const Icon:any = (props:any)=>{
    return(
        <Wrapper onClick={props.onclick} width={props.width} iconFill={props.iconFill} iconBac={props.iconBac} className={props.iconBac?'':'test'} >
            <div>
                {
                  props.href?<img className="icon" src={props.href} alt={props.value} />:<svg className="icon"><use xlinkHref={'#' + props.name}/></svg>
                }
            </div>
            {
                props.value?<span>{props.value}</span>:''
            }
        </Wrapper>
    )
}

export default Icon