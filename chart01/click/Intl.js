import React from 'react';
import ReactDOM from 'react-dom';
import CHAT from './test.js'; //引入js文件

class Intl extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }
    componentDidMount(){

    }
    render() {
        return (
            <div onClick={CHAT.click_alert}>点击函数</div>
        );
    }
}
export default Intl;
