type EChartsOption = echarts.EChartsOption;
let option:EChartsOption;

option = {
    backgroundColor: '#FFFFFF',
    title: {
        text: '支出构成',
        left: 24,
        top: 10,
        textStyle: {
            fontSize:16,
            color: '#000'
        }
    },
    tooltip: {
        trigger: 'item'
    },
    xAxis: {
        show:false
    },
    yAxis: {
        axisLine:{
          show:false
        },
        axisTick:{
          show:false
        },
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','46546','4654655']
    },
    grid: { top: '55%',left:'20%'},
    series: [
        {
            type: 'bar',
            data: [23, 24, 18, 25, 27, 28,65,46,45]
        },
        {
            name: '6月支出',
            type: 'pie',
            radius: '45%',
            bottom:'100',
            center: ['50%', '35%'],
            data: [
                { value: 336.55, name: '购物' },
                { value: 310.10, name: '衣服' },
                { value: 274.56, name: '吃饭' },
                { value: 235.78, name: '住宿' },
                { value: 400.13, name: '旅游' },
                { value: 274.56, name: '吃饭' },
                { value: 235.78, name: '住宿' },
                { value: 400.13, name: '旅游' }
            ].sort(function (a, b) {
                return a.value - b.value;
            }),
            roseType: 'radius',
            label: {
               show:true
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(98, 179, 123, 100)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            itemStyle: {
                color: 'rgba(98, 179, 123, 100)',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx?) {
                return Math.random() * 200;
            }
        }
    ]
};

export {option}