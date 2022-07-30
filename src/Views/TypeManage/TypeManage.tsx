import Button from "Components/Button";
import Icon from "Components/Icon";
import TypeNO from "Components/TypeManage/TypeNO";
import * as icon from "MoeyAxios/Icon"
import { useEffect, useState } from "react";
import AddType from "Components/TypeManage/AddType/AddType";
import { geneId } from "MoeyAxios/Data";
import { SwitchSection, TypeList } from "Views/TypeManage/Wrapper";

const TypeManage = ()=>{
    
    const [pageData,setPageData] = useState({
      iconList:icon.getIconList('income'),
      active:true,
      editView:false,
      id:{},
      addView:false,
      isAdd:false
    })

    useEffect(()=>{
      setPageData((fuck)=>{
        fuck.iconList=icon.getIconList(fuck.active?'income':'outgo')
        return {...fuck}
      })
    },[pageData.active])
    
    return(
        <div>
            <SwitchSection>
                <h3>分类管理</h3>
                <p>轻触分类可编辑或删除。</p>
                <div>
                    <Button onclick={()=>{setPageData({...pageData,active:true})}} className={pageData.active?'active':''} value={'收入'}/>
                    <Button onclick={()=>{setPageData({...pageData,active:false})}} className={!pageData.active?'active':''} value={'支出'}/>
                </div>
            </SwitchSection>
            <TypeList>
                <ol>
                    {
                      pageData.iconList.map((value,key)=>{
                       return(
                       <li key={key} onClick={()=>{
                          setPageData((fuck)=>{
                            fuck.iconList.forEach(data=>{
                              if(data.id===value.id)fuck.id=data
                            })
                            fuck.editView=true
                            return {...fuck}
                          })
                       }}>
                          <Icon {...value} />
                      </li>
                      )})
                      
                    }
                   <li onClick={()=>{
                    setPageData((fuck)=>{
                      fuck.isAdd=true
                      fuck.addView=true
                      fuck.id={id:geneId(7),href:'',name: 'outher', value: '其他', iconBac: 'rgba(239, 239, 239, 100)', iconFill: '#fff'}
                      return {...fuck}
                    })
                   }}><Icon name={'add'} value="添加" iconBac="rgba(239, 239, 239, 100)" iconFill="#fff"/></li>
                </ol>
            </TypeList>
            {pageData.editView?<TypeNO data-props={{pageData,setPageData}}/>:''}
            {pageData.addView?<AddType data-props={{pageData,setPageData}}/>:''}
      </div>
    )
}

export default TypeManage