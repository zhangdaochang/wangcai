import Icon from "Components/Icon";
import Space from "Components/Space";
import {useLocation} from 'react-router'
import {useHistory} from "react-router-dom";
import {date} from 'lib/xxx'
import Button from "Components/Button";
import WritePage from "Views/WritePage/WritePage";
import {useState} from "react";
import { delData} from "MoeyAxios/Data";
import { getIcon, getIconList } from "MoeyAxios/Icon";
import Wrapper from "Views/DetailsChild/Wrapper";



const DetailsChild =()=>{
    const [isShow,setIsShow]=useState(false)
    
    let data:any = useLocation().state
    data.iconList = getIconList('outgo')
    const [writeData,setWriteData] = useState(data)

    let history = useHistory()
    if(data===undefined)history.push('/details')

    let {Year,Month,day,hours,minutes} = date(data.date)
    let {name,value,href} = getIcon(data.amountTypeName,data.iconId)
    
    return(
        <Wrapper>
            <Icon name={"left"} onclick={()=>{history.push('/details')}}/>
            <Space/><Space/>
            <div className="card">
                <Space/><Space/>
                <Icon href={href} name={name} value={value} iconFill={'#fff'} iconBac={data.amountTypeName==='outgo'?'rgb(48,112,196)':'rgba(240,167,50,100)'}/>
                <Space/><Space/>
                <span className="amount">&nbsp;{data.amountTypeName==='income'?'+'+data.output:'-'+data.output}</span>
                <Space/>
                <div className={'data'}>
                    <label>记录时间</label><span>{Year}年{Month}月{day}日&nbsp;{hours}:{minutes}</span>
                    <Space/>
                </div>
                <Space/>
                <div className={'data'}>
                    <label>备注</label> <span>{data.bei}</span>
                    <Space/>
                </div>
                <div className={'operate'}>
                    <Button onclick={()=>{setIsShow(true)}} value={'编辑'}></Button>
                    <Button onclick={()=>{
                      delData(Year,Month,day,data.id)
                      history.push('/details')
                      }} value={'删除'}></Button>
                </div>
            </div>

            {isShow?<WritePage data-props={{writeData,setWriteData}} edit={true} setIsShow={setIsShow}/>:''}
        </Wrapper>
    )
}
export default DetailsChild