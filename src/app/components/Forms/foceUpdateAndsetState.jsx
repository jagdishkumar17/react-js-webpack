import React, { Component } from "react";

import 'app/styles/App.css';

class foceUpdateAndsetState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newArray: Math.random()
        }
        this.myHandler = this.myHandler.bind(this);
        // this handler is required to invoke the 'state and force' update methods
    }
    myHandler() {
        this.forceUpdate(); // this is force update way
        this.setState({ newArray: Math.random() }) // this is setState update way
    }
    render() {
        return (
            <div>
                <button onClick={this.myHandler}>click me</button>
                <h2>{this.state.newArray}</h2>
                <h2>{Math.random()}</h2>
            </div>
        );
    }

}
export default foceUpdateAndsetState;