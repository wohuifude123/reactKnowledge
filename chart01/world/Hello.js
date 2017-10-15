import './Hello.less';
let React = require('react');
let ReactDOM = require('react-dom');

export default class Hello extends React.Component {

    constructor(props) {
        super(props)
    }


    render(){
        return (
            <span id="test">World is beautiful!Yes...!</span>
        )
    }
}
