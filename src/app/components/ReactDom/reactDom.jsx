import React, { Component } from "react";
import ReactDOM from "react-dom";

// import '../../styles/App.css';

class reactDomLearn extends Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
    }
    handler() {
        var div=document.getElementById('myDiv');
        ReactDOM.findDOMNode(div).style.background = 'green'; 
        // this ReactDOM.findDOMNode method is used to work with dom elements.
    }
    render() {
        return (
            <div id="myDiv1">
                <button onClick={this.handler}>click me again</button>   
                <div id = "myDiv">NODEs</div>            
            </div>
        );
    }


}

export default reactDomLearn;