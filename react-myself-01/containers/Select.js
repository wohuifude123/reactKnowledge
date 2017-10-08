import React from 'react';

import PropTypes from 'prop-types';

import Option from '../components/Option'

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {val: 5};
    }

    componentDidMount() { // 渲染完成后调用一次，这个时候DOM结构已经渲染了
        // alert("选择渲染完成");
        this.setState({
            val: this.state.val+'=渲染完成了'
        }, () => {
            console.log(this.state.val)
        });
    }


    componentDidUpdate() { // 组件更新结束之后执行，在初始化render时不执行

    }

    render() {
        //const { posts} = this.props
        /*
            var _props = this.props,
                selectedSubreddit = _props.selectedSubreddit,
                posts = _props.posts,
                isFetching = _props.isFetching,
                lastUpdated = _props.lastUpdated;
         */
        const value = this.state.val;
        const options = [1,2,3,4,5,6];
        return (
            <Option
                value={value}
                options={options}
            />
        );
    }
}



export default Select


