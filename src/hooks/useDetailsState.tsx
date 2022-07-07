import {useState} from "react";
import pageContext from "Components/Details/PageContext";

const useDetailsState = () => {
    let AppData = JSON.parse(window.localStorage.getItem('AppData') || '')

    const date = () => {
        let date = new Date()
        let x = {
            Year: date.getFullYear(),
            Month: date.getMonth() > 10 ? date.getDate() : '0' + (date.getDate()),
            day: date.getDate() > 10 ? date.getDate() : '0' + date.getDate()
        }
        return x
    }
    const num = () => {
        let month = parseInt(String(pageData.month))
        let typeId = pageData.typeId
        let iconId = pageData.iconId
        let monthData = AppData['mouth'][month]
        let dayData: []
        if (monthData) {
            dayData = monthData.filter((data: any) => {
                return data
            })
        } else {
            setPageData((fuck) => {
                fuck.outgoValue = 0
                fuck.incomeValue = 0
                return fuck
            })
            return
        }
        if (typeId === 'all') {
            setPageData((fuck) => {
                dayData.forEach((dayArray: []) => {
                    dayArray.forEach((data) => {
                        data['type'] === 'outgo' ? fuck['incomeValue'] += parseInt(data['output']) : fuck['outgoValue'] += parseInt(data['output'])
                    })
                })
                fuck.dataList = dayData.slice()
                return fuck
            })
        } else if (typeId === 'outgo') {
            setPageData((fuck) => {
                dayData.forEach((dayArray: []) => {
                    dayArray.forEach((data) => {
                        console.log(data);
                        if (data['type'] === typeId && data['iconId']===iconId) {
                            fuck['outgoValue'] += parseInt(data['output'])
                            fuck['dataList'].push(data)
                        }
                    })
                })
                return fuck
            })
        } else {
            setPageData((fuck) => {
                dayData.forEach((dayArray: []) => {
                    dayArray.forEach((data) => {
                        if (data['type'] === typeId && data['iconId']===iconId) {
                            fuck['incomeValue'] += parseInt(data['output'])
                            fuck['dataList'].push(data)
                        }
                    })
                })
                return fuck
            })
        }
    }

    let nowDate = date()

    const [pageData, setPageData] = useState({
        isShow: false,
        typeName: '全部类型',
        typeId: "all",
        iconId: '',
        dataList: [],
        incomeValue: 0,
        outgoValue: 0,
        Year: nowDate.Year,
        month: nowDate.Month,
        day: nowDate.day,
    })


    return {pageContext, pageData, setPageData, date, num, AppData}
}
export {useDetailsState}