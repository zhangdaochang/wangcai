import React from "react";
import Layout from "Components/Layout";
import Top from "Components/Details/Top/Top";
import Card from "Components/Details/Card";
import WriteM from "Components/Details/WriteM";
import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {useDetailsState} from "../hooks/useDetailsState";

const Write = styled(WriteM)`
  position: absolute;
  bottom: 200px;
  right: 40px;
`

function Details(){
    const {pageContext,pageData,setPageData,date,num,AppData}=useDetailsState()

    return (
        <pageContext.Provider value={{pageData,setPageData,date,num,AppData}}>
        <Layout>
            <Top/>
            <Card/>
            <NavLink to={"/writepage"}>
                <Write/>
            </NavLink>

        </Layout>
        </pageContext.Provider>
    )
}

export default Details