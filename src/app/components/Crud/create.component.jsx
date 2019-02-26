// create.component.js

import React, { Component } from 'react';
import "../../styles/Dashboard.css";
import studentService from '../services/student.service';
import ToastrContainer, { Toast, ToastDanger, ToastSuccess } from 'react-toastr-basic';

class Create extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            address: '',
            gender: ''
        }
        this.state = {
            genders: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.logChange = this.logChange.bind(this)
    }
    componentDidMount() {
        this.setState({
            genders: [
                { value: 'Male', name: 'Male' },
                { value: 'Female', name: 'Female' }
            ]
        });
        this.setState({ gender: 'Male' });
        var dd = this.props.match.params.id;
        this.welcomePage();
    }
    welcomePage() {
        ToastDanger('Welcome to Add page');
    }
    render() {
        var divButtonStyle = { paddingTop: '10px' };//style={divButtonStyle}
        return (
            <div className="container register-form" >
                <ToastrContainer />
                <form onSubmit={this.handleSubmit} method="POST">
                    <label>Name</label>
                    <input className="form-control" value={this.state.name} onChange={this.logChange} name='name' />
                    <label>Address</label>
                    <textarea className="form-control" value={this.state.address} onChange={this.logChange} name='address' maxLength="1000" />
                    <label>Gender</label>
                    <div>
                        <select name='gender' value={this.state.gender} onChange={this.logChange}>
                            {this.state.genders.map((e, key) => {
                                return <option key={key} value={e.value}>{e.name}</option>;
                            })}
                        </select>
                    </div>
                    <div className="submit-section paddingtop10">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
    handleSubmit(event) {
        event.preventDefault();
        var data = {
            name: this.state.name,
            address: this.state.address,
            gender: this.state.gender
        }
        studentService.submitStudentsData(data).then(data => {
            this.props.history.push('/List');
        }).catch(function (err) {
            console.log(err);
        });

    }
    fetchStudentData() {
        let self = this;
        studentService.getStudentsDataById().then(data => {
            console.log(data);
        });

    }
    logChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
}
export default Create;