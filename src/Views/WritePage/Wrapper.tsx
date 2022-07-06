import styled from "styled-components";
import {green, PX2REM as PX} from "../../lib/PX2REM";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: RGBA(102, 102, 102, 10%);
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: end;

  > div {
    background-color: white;

    > span {
      display: block;
      text-align: right;
    }

    > .qie {
      display: flex;
      justify-content: space-around;

      > Button {
        height: ${PX(34)};
        width: ${PX(96)};
        background-color: #f4f4f4;
        color: black;
        opacity: 1;

        &.active {
          color: ${green};
        }
      }
    }

    > input {
      display: block;
      font-size: ${PX(16)};
      padding-left: 15px;
      height: ${PX(50)};
      width: ${PX(400)};
      border: 1px solid #bbb;
      margin: 0 auto;
    }

    > ol {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: scroll;
      >a{
        margin-left: 18px;
      }
      > li {
        margin-left: 18px;
        text-align: center;
        display: flex;
        align-items: center;
        flex-direction: column;

        > span {
          display: inline-block;
          margin-top: 8px;
          white-space: nowrap;
          width: 4em;
        }
      }
    }
  }
`

export default Wrapper