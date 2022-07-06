import {useEffect, useState} from "react";




const useWriteState = ()=>{
    const [pageData, setPageData] = useState({
        type: 'outgo', iconId: '', bei: '', output: '', iconList: [],date:''
    })
    const liSelect = (e:any) => {
        if (e.target.nodeName === 'OL') return
        let node = e.target
        while (node.nodeName !== 'LI') {
            node = node.parentNode
        }
        let id = node.getAttribute('my')

        if (id === 'zhangdaochang') return;

        setPageData(()=>{
            let x = {...pageData}
            x.iconId=id
            x.iconList.map((data:any)=>{
                if(data.id===id){
                    return data.iconBac=pageData.type==='income'?'rgba(98, 179, 123, 100)':'rgba(240,167,50,100)'
                }
                return data.iconBac='rgba(239,239,239)'
            })
            return x
        })
    }

    const selectType = (name:any) => {
        setPageData(() => {
            return {...pageData, type: name}
        })
    }

    useEffect(() => {
        let iconList = JSON.parse(window.localStorage.getItem('IconList')|| '')
        setPageData(() => {
            let x = {...pageData}
            x['iconList'] = iconList[pageData.type]['iconList'].slice()
            return x
        })
    }, [pageData.type])

    const NumberPadClick = (e:any) => {

        let value:string;
        if(e.target.innerText === '.'){
            value = pageData.output.indexOf('.')>= 1? pageData.output : pageData.output + e.target.innerText
        }else if(e.target.innerText === '确认'){
            if (!pageData.type || !pageData.output || !pageData.iconId ||!pageData.date){
                alert('不许确认')
                return;
            }
            let date = new Date(pageData.date)
            let month = date.getMonth()+1
            let day = date.getDate()

            let iconList = JSON.parse(window.localStorage.getItem('AppData')||'')
            if(!iconList['mouth'][month] || !iconList['mouth'][month][day] ){
                iconList['mouth'][month]=new Array()
                iconList['mouth'][month][day]=new Array()
            }
            const  xas: { iconList?:string[] } = {...pageData}
            delete xas['iconList']

            iconList['mouth'][month][day].push(xas)
            window.localStorage.setItem('AppData',JSON.stringify(iconList))
            setPageData(()=>{return {
                type: 'outgo', iconId: '', bei: '', output: '', iconList: [],date:''
            }})
            return
        }else if(!e.target.innerText){
            value=pageData.output.slice(0,pageData.output.length-1)
        }
        else{
            value=pageData.output + e.target.innerText
        }
        if(value.indexOf('.') > -1){value=value.slice(0,value.indexOf('.') + 3)}

        setPageData(()=>{ return {...pageData,output:value} })
    }

    return {pageData,setPageData,liSelect,selectType,NumberPadClick}
}

export  {useWriteState}