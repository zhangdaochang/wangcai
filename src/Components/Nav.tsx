import styled from "styled-components";
import {Link} from "react-router-dom";
import Icon from "./Icon";


const NavWrapper = styled.div`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  font-size: 12px;
  > ol {
    display: flex;
    > li {
      width: 33.3%;
      text-align: center;
      padding: 7px;
      > a {
        display: flex;
        flex-direction: column;
        text-align: center;
        > .icon {
          margin: 0 auto;
          width: 2.4em;
          height: 2.4em;
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
                    <Link to="/tags">
                        <Icon name={'tag'}/>
                        标签页
                    </Link>
                </li>
                <li>
                    <Link to="/money">
                        <Icon name={'money'}/>
                        记账页
                    </Link>
                </li>

                <li>
                    <Link to="/statistics">
                        <Icon name={'list'}/>
                        统计页
                    </Link>
                </li>
            </ol>
        </NavWrapper>
    )
}

export default Nav