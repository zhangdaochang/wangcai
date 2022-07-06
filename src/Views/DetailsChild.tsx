import styled from "styled-components";
import Icon from "Components/Icon";
import {PX2REM} from "lib/PX2REM";
import Space from "Components/Space";

const Wrapper = styled.div`
  background-color:#EDEDED;
  min-height: 100vh;
  >.test{
    fill: black;
    padding: 10px;
    >.div{
      >.icon{
        fill: black;
      }
    }
  }
  >.card{
    width: ${PX2REM(375)};
    height: ${PX2REM(372)};
    background-color: white;
    margin: 0 auto;
    text-align: center;
    >.amount{
      font-size: 24px;
      margin-left: -${PX2REM(15)};
    }
    >.data{
      display: flex;
      width: ${PX2REM(258)};;
      justify-content: space-between;
      margin: 0 auto;
      >label{
        color: #b7b7b7;
        text-align: end;
        width: 4em;
        display: block;
      }
    }
  }
`


const DetailsChild =()=>{
    return(
        <Wrapper>
            <Icon name={"left"}/>
            <Space/><Space/>
            <div className="card">
                <Space/><Space/>
                <Icon name={'shopcar'} value={'购物'} iconFill={'#fff'} iconBac={'rgba(98, 179, 123, 100)'}/>
                <Space/><Space/>
                <span className="amount">+&nbsp;4564</span>
                <Space/>
                <div className={'data'}>
                    <label>记录时间</label><span>2022年6月28日&nbsp;9:06</span>
                    <Space/>
                </div>
                <Space/>
                <div className={'data'}>
                    <label>备注</label> <span>阿布的闪屏的看</span>
                    <Space/>
                </div>

            </div>
        </Wrapper>
    )
}
export default DetailsChild