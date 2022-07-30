let option = {
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
        data: []
    },
    grid: { top: '55%',left:'20%'},
    series: [
        {
            type: 'bar',
            data: []
        },
        {
            name: '6月支出',
            type: 'pie',
            radius: '45%',
            bottom:'100',
            center: ['50%', '35%'],
            data: [].sort(function (a, b) {
                return a.value - b.value;
            }),
            roseType: 'radius',
            label: {
               show:true
            },
            labelLine: {
                lineStyle: {
                    color: 'rgb(48,112,196)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            itemStyle: {
                color: 'rgb(48,112,196)',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};

export {option}