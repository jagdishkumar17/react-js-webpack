import React, { Component } from "react";

class stateAndProps extends Component {
    constructor() {
        super();
        this.state = {
            header: "Header from props...",
            content: "Content from props...",
            errors: {
                name: 'pawan',
                address: 'modgil',
                gender: ''
            }
        }
    }
    render() {
        return (
            <div>
                <div className="errorMsg">{this.state.errors.name}</div>
                <Header headerProp={this.state.header} />
                <Content content={this.state.content} />
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
export default stateAndProps;