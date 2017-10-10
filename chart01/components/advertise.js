/*
 *  功能：圆形
 */
import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';


import 'echarts/lib/component/line';
import 'echarts/lib/component/bar';
import 'echarts/lib/component/pie';
import 'echarts/lib/component/scatter';
import 'echarts/lib/component/radar';
import 'echarts/lib/component/map';
import 'echarts/lib/component/treemap';
import 'echarts/lib/component/graph';
import 'echarts/lib/component/funnel';
import 'echarts/lib/component/parallel';
import 'echarts/lib/component/sankey';
import 'echarts/lib/component/boxplot';
import 'echarts/lib/component/candlestick';
import 'echarts/lib/component/effectScatter';
import 'echarts/lib/component/lines';

import 'echarts/lib/component/heatmap';
import 'echarts/lib/component/pictorialBar';
import 'echarts/lib/component/themeRiver';
import 'echarts/lib/component/custom';
import 'echarts/lib/component/graphic';
import 'echarts/lib/component/grid';
import 'echarts/lib/component/legendScroll';

import 'echarts/lib/component/axisPointer';
import 'echarts/lib/component/polar';

import 'echarts/lib/component/geo';
import 'echarts/lib/component/parallel';
import 'echarts/lib/component/singleAxis';
import 'echarts/lib/component/brush';
import 'echarts/lib/component/calendar';
import 'echarts/lib/component/dataZoom';
import 'echarts/lib/component/visualMap';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';
import 'echarts/lib/component/markArea';
import 'echarts/lib/component/timeline';
import 'echarts/lib/component/toolbox';


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
