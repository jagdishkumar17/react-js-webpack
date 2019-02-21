// create.component.js

import React, { Component } from 'react';
import DashboardStyle from "../../styles/Dashboard.css";
class Create extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            gender: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.logChange = this.logChange.bind(this)
    }

    render() {
        var divButtonStyle = {
            paddingTop: '10px'
        };
        return (
            <div className="container register-form" >
                <form onSubmit={this.handleSubmit} method="POST">
                    <label>Name</label>
                    <input className="form-control" onChange={this.logChange} name='name' />
                    <label>Address</label>
                    <textarea className="form-control" onChange={this.logChange} name='address' maxLength="1000" />
                    <label>Gender</label>
                    <div>
                        <select name='gender' onChange={this.logChange}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className="submit-section" style={divButtonStyle}>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
    handleSubmit(event) {
        debugger;
        var data = {
            name: this.state.name,
            address: this.state.address,
            gender: this.state.gender
        }
        event.preventDefault();
    }

    logChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
}
export default Create;