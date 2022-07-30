import Icon from "Components/Icon";
import {PX2REM as PX} from "lib/PX2REM";
import styled from "styled-components";
import { getIcon } from "MoeyAxios/Icon";

const Wrapper = styled.div`
    background-color: white;
    height: ${PX(75)};
    display: flex;
    align-items: center;
    justify-content: space-between;
    >.left{
      margin-left: ${PX(20)};
      display: flex;
      align-items: center;
      >div{
        margin-left: ${PX(10)};
        display: flex;
        flex-direction: column;
        font-size: ${PX(14)};
        >span{
          margin-top: 5px;
          color: rgba(183, 183, 183, 100);
        }
      }
    }
    >.right{
      margin-right: ${PX(28)};
      font-size: ${PX(20)};
      &.yellow{
        color: rgba(224, 187, 106, 100);
      }
    }
`

const CardBottom = (props:any)=>{
    const data = props['data']
    let time = new Date(data.date)
    
    let {name,value,href}= getIcon(data.amountTypeName,data.iconId)
  
    return(
        <Wrapper>
            <div className="left">
                <Icon href={href} iconBac={data.amountTypeName==='outgo'?'rgb(48,112,196)':'rgba(240,167,50,100)'} name={name} iconFill='#fff'/>
                <div>
                    {value}
                    <span>{time.getHours()+':'+time.getMinutes()} {data.bei===''?'':<>&nbsp;|&nbsp;{data.bei}</>}</span>
                </div>
            </div>
            <div className={`right ${data.amountTypeName==='income'?'yellow':''}`}>
                {data.amountTypeName==='income'?'+'+data.output:'-'+data.output}
            </div>
        </Wrapper>
    )
}

export default CardBottom