import React, { Component } from "react";

import '../styles/App.css';

class setState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newArray: []
        }
        this.setStateHandler = this.setStateHandler.bind(this);

    }
    setStateHandler() {
        var item = "setState..."
        var myArray = this.state.newArray.slice();
        myArray.push(item);
        this.setState({ newArray: myArray })
    }
    render() {
        return (
            <div>
                <button onClick={this.setStateHandler}>click me</button>
                <h2>{this.state.newArray}</h2>                
            </div>
        );
    }


}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.headerProp}</h1>
            </div>
        );
    }
}
class Content extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.content}</h2>
            </div>
        );
    }
}
export default setState;