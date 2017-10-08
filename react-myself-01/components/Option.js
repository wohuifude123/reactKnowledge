import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Picker extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { value, options } = this.props

        return (
            <div>
                <h1>{value}</h1>
                <select>
                    {options.map(option => (
                        <option value={option} key={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        )
    }
}
