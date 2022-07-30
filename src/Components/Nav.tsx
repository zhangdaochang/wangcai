import styled from "styled-components";
import {NavLink} from "react-router-dom";
import Icon from "Components/Icon";
import {PX2REM as PX,green} from "lib/PX2REM";


const NavWrapper = styled.div`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  font-size: 16px;
  background-color: white;
  > ol {
    display: flex;
    > li {
      width: 33.3%;
      text-align: center;
      padding: ${PX(15)};
      > a {
        display: flex;
        flex-direction: column;
        align-items: center;
        > .icon {
          width: ${PX(24)};
          height: ${PX(24)};
          margin-bottom: 8px;
        }
        &.selected{
          color: ${green};
          .icon{
            fill: ${green};
          }
        }
      }
    }
  }
`

const Nav = () => {
    return (
        <NavWrapper>
            <ol>
                <li>
                    <NavLink to="/details" activeClassName="selected">
                        <Icon name={'details'}/>
                        明细
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                        <Icon name={'statistics'}/>
                        统计
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/me" activeClassName="selected">
                        <Icon name={'me'}/>
                        我的
                    </NavLink>
                </li>
            </ol>
        </NavWrapper>
    )
}

export default Nav