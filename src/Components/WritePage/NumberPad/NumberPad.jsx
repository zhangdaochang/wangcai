import Button from "Components/Button";
import Icon from "Components/Icon";
import 'index.scss'
import {useContext} from "react";
import PageContext from "Components/WritePage/PageContext";
import Wrapper from "Components/WritePage/NumberPad/Wrapper";


const NumberPad = ()=>{
    const {NumberPadClick} = useContext(PageContext);
    return(
        <Wrapper className={'clearfix'} onClick={(e)=>NumberPadClick(e)}>
            <Button value={'1'}/>
            <Button value={'2'}/>
            <Button value={'3'}/>
            <Button className={'back'} value={(<Icon name={'back'}/>)}/>
            <Button value={'4'}/>
            <Button value={'5'}/>
            <Button value={'6'}/>
            <Button className={'ok'} value={'确认'}/>
            <Button value={'7'}/>
            <Button value={'8'}/>
            <Button value={'9'}/>
            <Button value={'0'}/>
            <Button className={'dian'} value={'.'}/>
        </Wrapper>
    )
}

export default NumberPad