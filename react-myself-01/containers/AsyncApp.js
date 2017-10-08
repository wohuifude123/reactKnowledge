import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class AsyncApp extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return
    }
}

function mapStateToProps(state) {
    const { postsBySubreddit } = state
}

export default connect(mapStateToProps)(AsyncApp)
