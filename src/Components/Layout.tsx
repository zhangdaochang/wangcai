import Nav from "./Nav";
import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: #f8f8f8;
`
const Main = styled.div`
  flex-grow: 1;
  overflow-y:scroll;
  height: 50px;
`


const Layout =(props:any)=>{
    return(
        <Wrapper>
            <Main>
                {props.children}
            </Main>
            <Nav/>
        </Wrapper>
    )
}

export default Layout