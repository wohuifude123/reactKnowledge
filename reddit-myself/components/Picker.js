import React, { Component } from 'react'
import PropTypes from 'prop-types'

// <button onClick={()=>{this.doubleNumber()}}>我的人生了567</button>
// <button onClick={e => onClick(e.target.value)}>我的人生了567</button>

export default class Picker extends Component {
    constructor(){
        super();
        this.state={
            origin:true
        }
    }
    doubleNumber(){
        this.setState({
            origin:!this.state.origin
        });
    }
    render() {
        const { value, onClick } = this.props
        // var value = this.props.value;
        let number = 5;
        if(!this.state.origin){
            number*=2;
        }else{
            number = 5;
        }
        return (
            <div>
                <h1>{value}</h1>
                <button onClick={ e => onClick(e.target.value) }>我的人生了567</button>
                <h2>{number}</h2>
            </div>
        )
    }
}

Picker.propTypes = {
    value: PropTypes.string.isRequired
}
