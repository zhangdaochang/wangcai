import styled from "styled-components";
import {PX2REM as PX} from "../lib/PX2REM";

const Button = styled.button`
    border: none;
    width: ${PX(60)};
    height:${PX(35)};
    font-size: 16px;
    border-radius: 6px;
    color: white;
    background-color: transparent;
    opacity: 0.5;
`

export default Button