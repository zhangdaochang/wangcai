import Button from "Components/Button";
import Icon from "Components/Icon";
import 'index.scss'
import Wrapper from "Components/WritePage/NumberPad/Wrapper";
import { addDayData, geneId, changeData } from "MoeyAxios/Data"
import { useHistory } from "react-router-dom";

const NumberPad = (props: any) => {
    let history = useHistory()
    const { pageData, setPageData, edit } = props['data-props']

    const NumberPadClick = (e: any) => {
        let value: string;
        let date = new Date(pageData.date)
        let month = date.getMonth() + 1
        let day = date.getDate()
        if (e.target.innerText === '.') {
            value = pageData.output.indexOf('.') >= 1 ? pageData.output : pageData.output + e.target.innerText
        } else if (e.target.innerText === '确认') {

            if (!pageData.amountTypeName || !pageData.output || !pageData.iconId || !pageData.date) {
                alert('不许确认')
                return;
            }
            if (edit) {
                history.push('/details')
                let data = { ...pageData }
                delete data.iconList
                changeData(date.getFullYear(), month, day, pageData.id, data)
                return
            }

            let data = { ...pageData }
            delete data.iconList
            let id = geneId(8)
            addDayData(date.getFullYear(), month, day, id, data)

            setPageData((fuck: any) => {
                fuck.iconId = ''
                fuck.bei = ''
                fuck.date = ''
                fuck.edit = false
                fuck.output = ''
                fuck.iconList.map((data: any) => {
                    return data.iconBac = 'rgba(239,239,239)'
                })
                return { ...fuck }
            })
            return
        } else if (!e.target.innerText) {
            value = pageData.output.slice(0, pageData.output.length - 1)
        }
        else {
            value = pageData.output + e.target.innerText
        }
        if (value.indexOf('.') > -1) { value = value.slice(0, value.indexOf('.') + 3) }

        setPageData(() => { return { ...pageData, output: value } })

    }

    return (
        <Wrapper className={'clearfix'} onClick={(e) => NumberPadClick(e)}>
            <Button value={'1'} />
            <Button value={'2'} />
            <Button value={'3'} />
            <Button className={'back'} value={(<Icon name={'back'} />)} />
            <Button value={'4'} />
            <Button value={'5'} />
            <Button value={'6'} />
            <Button className={'ok'} value={'确认'} />
            <Button value={'7'} />
            <Button value={'8'} />
            <Button value={'9'} />
            <Button value={'0'} />
            <Button className={'dian'} value={'.'} />
        </Wrapper>
    )
}

export default NumberPad