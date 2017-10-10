/*
 *  功能：圆形
 */
import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';

import 'echarts/lib/chart/pie';

import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class advertise extends Component {
    componentDidMount() {
        var dom = document.getElementById("advertise");
        var myChart = echarts.init(dom);
        var app = {};
        option = null;
        option = {
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    data:[
                        {value:235, name:'超级视频'},
                        {value:274, name:'无限灵魂'},
                        {value:310, name:'邮件营销'},
                        {value:335, name:'直接访问'},
                        {value:400, name:'搜索引擎'}
                    ]
                }
            ]
        };

        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }

    }
    render() {
        return (
            <div id="advertise" style={{ width: 400, height: 400 }}></div>
        );
    }
}

export default advertise;
