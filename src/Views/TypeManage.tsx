import styled from "styled-components";
import {PX2REM as PX,green} from "../lib/PX2REM";
import Button from "../Components/Button";
import Icon from "../Components/Icon";
import TypeNO from "../Components/TypeNO";

const SwitchSection = styled.section`
  height: ${PX(300)};
  text-align: center;
  >h3{
    font-size: 20px;
    margin-top: ${PX(56)};
  }
  >p{
    margin-top: ${PX(50)};
    margin-left: -${PX(100)};
  }
  >div{
    margin-top: ${PX(68)};;
    display: flex;
    justify-content: space-around;
    >Button{
      color: ${green};
      opacity: 1.0;
      background-color: #F4F4F4;
      width: ${PX(95)};
    }
  }
`
const TypeList = styled.section`
  padding:${PX(40)};
  >ol{
    display: flex;
    >li{
      display: flex;
      flex-direction: column;
      align-items: center;
      >div{
        background-color: #E8c630;
        width: ${PX(44)};
        height: ${PX(44)};
        border-radius: 50%;
        text-align: center;
        line-height: ${PX(60)};
        >.icon{
          width: ${PX(30)};
          height: ${PX(30)};
          fill: white;
        }
      }
    }
  }
`
const TypeManage = ()=>{

    return(
        <div>
            <SwitchSection>
                <h3>分类管理</h3>
                <p>轻触分类可编辑或删除。</p>
                <div>
                    <Button value={'转账'}/>
                    <Button value={'支出'}/>
                </div>
            </SwitchSection>
            <TypeList>
                <ol>
                    <li>
                        <div>
                            <Icon name={'add'}/>
                        </div>
                        <span>添加</span>
                    </li>
                </ol>
            </TypeList>
            {/*<AddType/>*/}
            <TypeNO/>
        </div>
    )
}

export default TypeManage