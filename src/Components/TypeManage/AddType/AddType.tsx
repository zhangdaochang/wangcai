import Icon from "Components/Icon";
import Button from "Components/Button";
import Space from "Components/Space";
import { addIcon,changeIcon,getIconList} from "MoeyAxios/Icon";
import Wrapper from "Components/TypeManage/AddType/Wrapper";


const AddType = (props:any)=>{

    const {pageData,setPageData} = props['data-props']
    
    return(
        <Wrapper onClick={()=>{
          setPageData({...pageData,addView:false})
        }}>
          <div onClick={(e)=>{
            e.stopPropagation()
            e.preventDefault()
          }}>
            <div className="titleName">
                  <span>&nbsp;</span>
                  {pageData.isAdd?<span>添加分类</span>:<span>编辑分类</span>}
                  <Icon width={28} onclick={(e:Event)=>{ 
                    e.stopPropagation()
                    e.preventDefault()
                    setPageData({...pageData,addView:false})}} name={'close'}/>
              </div>
              <Space/><Space/><Space/><Space/>
              <div className="iconView">
                <Icon {...pageData.id}/>
              </div>
              <Space/><Space/>
              <div className="TypeInput">
                  <input type="text" onChange={(e)=>{
                    setPageData((fuck:any)=>{
                      fuck.id.value=e.target.value
                      return {...fuck}
                    })
                  }} placeholder={pageData.isAdd?"在这里添加分类名称":"在这里修改分类名称"} value={pageData.id.value}/>
                  <input type="text" onChange={(e)=>{
                    setPageData((fuck:any)=>{
                      if(fuck.isAdd){
                        fuck.id.name=''
                        fuck.id.href=e.target.value
                        return {...fuck}
                      }
                      
                      fuck.id.name=e.target.value
                      return {...fuck}
                    })
                  }} placeholder={"在这里设置 ICON 图标"} value={pageData.id.href?pageData.id.href:pageData.id.name}/>
              </div>
              <Button onclick={()=>{
                let type = pageData.active?'income':'outgo'
                if(pageData.isAdd){
                  addIcon(type,pageData.id)
                }else{
                  changeIcon(type,pageData.id)
                }

                setPageData({...pageData,iconList:getIconList(type),addView:false})
                
              }} value={"确定"}/>

          </div>
        </Wrapper>
    )
}

export default AddType