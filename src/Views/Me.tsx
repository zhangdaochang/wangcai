//import React from "react";
import Layout from "../Components/Layout";
import styled from "styled-components";
import {PX2REM as PX,green} from "../lib/PX2REM";
//import Button from "../Components/Button";
import Icon from "../Components/Icon";
import {NavLink} from "react-router-dom";

// const MeSection = styled.section`
//     height: ${PX(208)};
//     background-color: ${green};
//     color: #FFFFFF;
//     >div{
//       text-align: center;
//       padding: ${PX(20)};
//     }
//     >.place{
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       >.tip{
//         flex-grow: 1;
//         padding: 0 24px;
//         >div{
//           text-align: left;
//         }
//         >div:nth-child(1){
//           font-size: 24px;
//           margin-bottom: 30px;
          
//         }
//       }
//       >Button{
//         opacity: 1.0;
//         background-color: rgba(255, 255, 255, 40%);
//       }
//     }
  
// `
// const MeImage = styled.section`
//   width:${PX(100)};
//   height:${PX(100)};
//   margin-left: ${PX(24)};
//   box-shadow: 0 0  0.25px #000;
//   >img{
//     width: ${PX(100)};
//   }
// `
const TypeSection = styled.section`
  >a{
    background-color: white;
    font-size: 20px;
    height: ${PX(80)};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: ${PX(26)};;
    >.icon{
        width: 24px;
        height: 24px;
        margin-right: ${PX(20)};;
    }
  }
`
const Top = styled.div`
height: ${PX(140)};
background-color: ${green};
color: #FFFFFF;
text-align: center;
padding: ${PX(40)};
`



function Money() {
    return (
        <Layout>
            {/* <MeSection>
                <div><span>旺财记账</span></div>
                <div className={'place'}>
                    <MeImage>
                        <img src="https://tse1-mm.cn.bing.net/th/id/OIP-C.MYuNKcGjMzuyR9r0PsudiwAAAA?w=195&h=195&c=7&r=0&o=5&pid=1.7" alt="头像哦"/>
                    </MeImage>
                    <div className="tip">
                        <div>欢迎你</div>
                        <div>同志还未登录呢。。。</div>
                    </div>
                    <Button value={'登录'}/>
                </div>
            </MeSection> */}
            <Top>
              <h2>旺财记账</h2>
            </Top>
              <TypeSection>
                  <NavLink  to="/typemanage">
                      <span>分类管理</span>
                      <Icon name={'right'}/>
                  </NavLink>
              </TypeSection>
        </Layout>
    )

}

export default Money