import Wrapper from "Views/WritePage/Wrapper";
import Space from "Components/Space";
import Icon from "Components/Icon";
import Button from "Components/Button";
import Textarea from "Components/WritePage/Textarea";
import NumberPad from "Components/WritePage/NumberPad/NumberPad";
import {Link, useHistory} from "react-router-dom";
import PageContext from "Components/WritePage/PageContext";
import {useWriteState} from "hooks/useWriteState";
import DataSelect from "../../Components/DataSelect";

const WritePage = () => {
    let history = useHistory();
    let {pageData,setPageData,liSelect,selectType,NumberPadClick} = useWriteState()

    return (
        <PageContext.Provider value={{pageData, setPageData,NumberPadClick}}>
            <Wrapper>
                <Space/><Space/><Space/><Space/>
                <div>
                <span onClick={() => {
                    history.push('/details')
                }}><Icon name="close"/></span>
                    <div className={'qie'}>
                        <Button onclick={() => {selectType('outgo')}} className={pageData.typeName === 'outgo' ? 'active' : ''} value={"支出"}/>
                        <Button onclick={() => {selectType('income')}} className={pageData.typeName === 'income' ? 'active' : ''} value={"收入"}/>
                    </div>
                    <Space/><Space/>
                    <DataSelect/>
                    <input type="text" onChange={() => {}} value={pageData.output}/>
                    <Space/>
                    <ol onClick={(e)=>{liSelect(e)}}>
                        {
                            pageData.iconList.map((data) => {
                                return (
                                    <li key={data.id} my={data.id}>
                                        <Icon name={data.name} iconBac={data.iconBac} value={data.value}
                                              iconFill={data.iconFill}/>
                                    </li>
                                )
                            })
                        }
                        <Link to={'/typemanage'}>
                            <li my={'zhangdaochang'}>
                                <Icon name={'more'} iconBac={'rgba(239,239,239)'} value={'更多'} iconFill={'#fff'}/>
                            </li>
                        </Link>
                    </ol>
                    <Space/>
                    <Textarea name={"这里备注:"}/>
                    <Space/>
                    <NumberPad/>
                </div>
            </Wrapper>
        </PageContext.Provider>)
}
export default WritePage