import styled from "styled-components";
import {Link} from "react-router-dom";

const NavWrapper = styled.div`
  box-shadow: 0 0 3px rgba(0,0,0,0.25) ;
  > ol {
    display: flex;

    > li {
      width: 33.3%;
      text-align: center;
      padding: 16px;
    }
  }
`

const Nav = () => {
    return(
        <NavWrapper>
            <ol>
                <li><Link to="/tags">标签页</Link></li>
                <li><Link to="/money">记账页</Link></li>
                <li><Link to="/statistics">统计页</Link></li>
            </ol>
        </NavWrapper>
    )
}

export default Nav