import React from "react";
import Layout from "../Components/Layout";
import DataCard from "../Components/Statistics/DataCard";
import StaticsCard from "../Components/Statistics/StaticsCard";



function Statistics() {
    return (
        <Layout>
            <DataCard/>
            <StaticsCard/>
        </Layout>
    )
}

export default Statistics