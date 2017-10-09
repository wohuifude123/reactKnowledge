import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class AsyncApp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props
        return
            <div>{isFetching.toLocaleString()}</div>
    }
}




function mapStateToProps(state) {
    const { postsBySubreddit } = state
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

export default connect(mapStateToProps)(AsyncApp)
