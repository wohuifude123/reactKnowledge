import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Async extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { val } = this.props
        return(
                <h2>val=={val}</h2>
        )
    }
}

export default Async
