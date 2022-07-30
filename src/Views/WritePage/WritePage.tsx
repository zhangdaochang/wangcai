import Wrapper from "Views/WritePage/Wrapper";
import Space from "Components/Space";
import Icon from "Components/Icon";
import Button from "Components/Button";
import Textarea from "Components/WritePage/Textarea";
import NumberPad from "Components/WritePage/NumberPad/NumberPad";
import {Link} from "react-router-dom";
import DataSelect from "Components/WritePage/DataSelect";
import { Key, useEffect} from "react";

const getIconList=(type:string)=>{
    let iconList =JSON.parse( window.localStorage.getItem("IconList") || '')
    let IconListArray:any[] = []
    Object.keys(iconList[type]['iconList']).forEach((k:string)=>{
        IconListArray.push(iconList[type]['iconList'][k])
    })
    return IconListArray
}

const WritePage = (props:any) => {
    const setIsShow = props.setIsShow
    const edit = props.edit
    
    const {writeData,setWriteData} = props['data-props']
    let pageData = writeData
    let setPageData = setWriteData

   useEffect(()=>{
    setPageData((fuck: { iconList: any[];iconId:string;amountTypeName: string; })=>{
        fuck.iconList=getIconList(fuck.amountTypeName)
        fuck.iconList.map((v:{id:string,iconBac:string,amountTypeName:string})=>{
            if(v.id===fuck.iconId){v.iconBac=fuck.amountTypeName==='outgo'?'rgb(48,112,196)':'rgba(240,167,50,100)'}
        })
        return {...fuck}
    })
   },[pageData.amountTypeName])

   const selectType = (name:any) => {
        setPageData(() => {
            return {...pageData, amountTypeName: name}
        })
    }
    const liSelect = (e:any) => {
        if (e.target.nodeName === 'OL') return
        let node = e.target
        while (node.nodeName !== 'LI') {
            node = node.parentNode
        }
        let id = node.getAttribute('data-my')

        if (id === 'zhangdaochang') return;
        
        setPageData((x: { iconId: any; iconList: any[]; })=>{
            x.iconId=id
            x.iconList.map((data:any)=>{
                if(data.id===id){
                    return data.iconBac=pageData.amountTypeName==='outgo'?'rgb(48,112,196)':'rgba(240,167,50,100)'
                }
                return data.iconBac='rgba(239,239,239)'
            })
            return {...x}
        })
    }
    
    return (
            <Wrapper>
                <Space/><Space/><Space/><Space/>
                <div>
                <span onClick={() => {
                    setIsShow(false)
                    setPageData((fuck:{iconList:any[];amountTypeName:string})=>{
                        fuck.iconList=getIconList(fuck.amountTypeName)
                        return {...fuck}
                    })
                }}><Icon name="close"/></span>
                    <div className={'qie'}>
                        <Button onclick={() => {selectType('outgo')}} className={pageData.amountTypeName === 'outgo' ? 'active' : ''} value={"支出"}/>
                        <Button onclick={() => {selectType('income')}} className={pageData.amountTypeName === 'income' ? 'active' : ''} value={"收入"}/>
                    </div>
                    <Space/><Space/>
                    <DataSelect data-props={{pageData,setPageData}}/>
                    <input type="text" onChange={() => {}} value={pageData.output}/>
                    <Space/>
                    <ol onClick={(e)=>{liSelect(e)}}>
                        {
                            pageData.iconList.map((data: {
                                href: any; id: Key | null | undefined; name: any; iconBac: any; value: any; iconFill: any; }) => {
                                return (
                                    <li key={data.id} data-my={data.id}>
                                        <Icon href={data.href} name={data.name} iconBac={data.iconBac} value={data.value}
                                              iconFill={data.iconFill}/>
                                    </li>
                                )
                            })
                        }
                        <Link to={'/typemanage'}>
                            <li data-my={'zhangdaochang'}>
                                <Icon name={'more'} iconBac={'rgba(239,239,239)'} value={'更多'} iconFill={'#fff'}/>
                            </li>
                        </Link>
                    </ol>
                    <Space/>
                    <Textarea name={"这里备注:"} data-props={{pageData,setPageData}}/>
                    <Space/>
                    <NumberPad data-props={{pageData,setPageData,edit}}/>
                </div>
            </Wrapper>
            )
}
export default WritePage