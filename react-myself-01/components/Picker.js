import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Picker extends Component {
    render() {
        const { onClick } = this.props

        // var onClick = this.props.onClick;

        // var onClick 等同 handleClick(nextSubreddit) { alert(nextSubreddit); }

        return (
            <div>
                <button onClick={ (e) =>onClick("开始我的人生")}>点击</button>
            </div>
        )
    }
}
