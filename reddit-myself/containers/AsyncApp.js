import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Picker from '../components/Picker.js';
import { selectSubreddit } from '../actions'

import {
    //selectSubreddit,
    //fetchPostsIfNeeded,
    //invalidateSubreddit
} from '../actions'


// onClick={this.handleChange}

// onClick={this.handleChange.bind(this)}

class AsyncApp extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        this.state={
            figure: "清华我的梦"
        }
    }

    componentDidMount() { // 渲染完成之后调用一次

    }

    componentDidUpdate(prevProps) { // 初始化渲染不会调用，更新前调用
        console.log(this.state.figure);
    }

    handleChange(nextSubreddit) {
        this.props.dispatch(selectSubreddit(nextSubreddit))
        this.props.dispatch(fetchPostsIfNeeded(nextSubreddit))
        this.setState({figure: '谁信啊'});
    }
    /*
    handleClick(event) {
        this.setState({figure: '谁信啊'});
    }

    render() {
        let v = this.state.figure;
        return (
            <div>
                <Picker
                    value={v}
                    onClick={this.handleClick.bind(this)}
                />
            </div>
        )
    }
    */

    render() {
        let v = this.state.figure;
        return (
            <div>
                <Picker
                    value={v}
                    onClick={this.handleChange}
                />
            </div>
        )
    }


}

function mapStateToProps(state) {
    const { selectedSubreddit, postsBySubreddit } = state
    /*
        var _state = state,
            selectedSubreddit = _state.selectedSubreddit,
            postsBySubreddit = _state.postsBySubreddit;
     */
    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: []
    }
    /*
        var _ref = postsBySubreddit[selectedSubreddit] || {
            isFetching: true,
            items: []
        },
            isFetching = _ref.isFetching,
            lastUpdated = _ref.lastUpdated,
            posts = _ref.items;

     */
    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated
    }
    /*
        return {
            selectedSubreddit: selectedSubreddit,
            posts: posts,
            isFetching: isFetching,
            lastUpdated: lastUpdated
        };
     */
}

export default AsyncApp
