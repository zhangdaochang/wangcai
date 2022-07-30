import React from "react";
import Icon from "Components/Icon";
import TypeSelect from "Components/Details/TypeSelect";
import Wrapper from "Components/Details/Top/Wrapper";

const Top:React.FC = (props:any)=>{
    const {pageData,setPageData} = props['data-props'] 
    const typeSelect = () => {
        setPageData((fuck: any)=>{
            fuck.isShow=true
            return {...fuck}
        })
    }
    
    return(
        <Wrapper>
            {
                pageData.isShow?<TypeSelect data-props={{pageData,setPageData}}/>:''
            }
            <span>记账本</span>
            <div className="allType" onClick={typeSelect}>
                <span>{pageData.typeName}&nbsp;|</span>
                <Icon name={'allType'} iconFill={'#fff'}/>
            </div>
            <div className="details">
                <div className="dataSelect">
                    <input onChange={(e)=>{
                        setPageData({...pageData,Year:e.target.value.split('-')[0],month:e.target.value.split('-')[1]})
                    }} value={pageData.Year+'-'+pageData.month} type="month"/>
                </div>
                {
                    pageData.typeId==='all'?
                        <>
                            <div className="billing">总支出&nbsp;{pageData.outgoValue}</div>
                            <div className="recorded">总入账&nbsp;{pageData.incomeValue}</div>
                        </>:pageData.typeId==='income'? <div className="billing">{pageData.typeName}总收入&nbsp;{pageData.incomeValue}</div>:<div className="billing">{pageData.typeName}总支出&nbsp;{pageData.outgoValue}</div>
                }


            </div>
        </Wrapper>
    )
}

export default Top