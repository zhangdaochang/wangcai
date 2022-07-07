import React, {useContext, useEffect} from "react";
import Icon from "Components/Icon";
import TypeSelect from "Components/Details/TypeSelect";
import pageContext from "Components/Details/PageContext";
import Wrapper from "Components/Details/Top/Wrapper";



const Top:React.FC = ()=>{
    const {pageData,setPageData,num} = useContext(pageContext)
    const AppData = JSON.parse(window.localStorage.getItem('AppData')||'')



    useEffect(()=>{
        num()
    },[pageData.month,pageData.Year,pageData.typeId])

    const typeSelect = () => {
        setPageData({...pageData,isShow:true})
    }

    return(
        <Wrapper>
            {
                pageData.isShow?<TypeSelect/>:''
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
                    pageData.typeId==='all'?<>
                            <div className="billing">总支出&nbsp;{pageData.outgoValue}</div>
                            <div className="recorded">总入账&nbsp;{pageData.incomeValue}</div>
                        </>:pageData.typeId==='income'? <div className="billing">{pageData.typeName}总收入&nbsp;{pageData.outgoValue}</div>:<div className="billing">{pageData.typeName}总支出&nbsp;{pageData.outgoValue}</div>

                }


            </div>
        </Wrapper>
    )
}

export default Top