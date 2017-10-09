import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Async from '../components/Async'

class AsyncApp extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this, "世界")
        this.state = {abc:'人生的无限'}
    }

    handleClick(nextSubreddit) {
        this.props.dispatch(fetchPostsIfNeeded(nextSubreddit))
        alert(nextSubreddit);
    }

    render() {
        const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props
        return(
            <div>
                <Async val={this.state.abc}/>
                <h1>isFetching=={isFetching.toLocaleString()}</h1>
                <button onClick={this.handleClick}>点击</button>
            </div>
        )
    }
}

/*
{
  selectedSubreddit: 'frontend',
  postsBySubreddit: {
    frontend: {
      isFetching: true,
      didInvalidate: false,
      items: []
    },
    reactjs: {
      isFetching: false,
      didInvalidate: false,
      lastUpdated: 1439478405547,
      items: [ 42, 100 ]
    }
  }
}
 */


/*
function mapStateToProps(state) {
    const { postsBySubreddit, selectedSubreddit } = state
    const {
        isFetching,
        items: posts
    } = {
        isFetching: true,
        items: []
    }

    return {
        posts,
        isFetching
    }
}
*/

/*
function mapStateToProps(state) {
    const { selectedSubreddit, postsBySubreddit } = state
    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: []
    }

    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated
    }
}
*/

// 初始化 state
function mapStateToProps(state) {
    var selectedSubreddit = state.selectedSubreddit,
        postsBySubreddit = state.postsBySubreddit;

    var _ref = postsBySubreddit[selectedSubreddit] || {
            isFetching: true,
            items: []
        },
        isFetching = _ref.isFetching,
        lastUpdated = _ref.lastUpdated,
        posts = _ref.items;

    return {
        selectedSubreddit: selectedSubreddit,
        posts: posts,
        isFetching: isFetching,
        lastUpdated: lastUpdated
    };
}

export default connect(mapStateToProps)(AsyncApp)
