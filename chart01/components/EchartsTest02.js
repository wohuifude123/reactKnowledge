import React, { Component } from 'react';

// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');


class EchartsTest02 extends Component{
    // 基于准备好的dom，初始化echarts实例
    componentDidMount() {// 初始化 render 之后只执行一次
        var myChart = echarts.init(document.getElementById('myChart02'));
        // 绘制图表
        myChart.setOption({
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ["王子","木龙与","雪纺衫","裤子","高跟鞋","袜子","茉莉花"]
            },
            yAxis: {},
            series: [{
                name: '无限',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20, 60]
            }]
        });

    }

    render() {
        return (
            <div id="myChart02" style={{ width: 500, height: 500 }}></div>
        );
    }

}

export default EchartsTest02;

