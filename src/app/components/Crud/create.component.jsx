// create.component.js

import React, { Component } from 'react';
import "../../styles/Dashboard.css";
import studentService from '../services/student.service';
import ToastrContainer, { Toast, ToastDanger, ToastSuccess } from 'react-toastr-basic';

class Create extends Component {
    constructor() {
        super();
        // Student Model Properties
        this.state = {
            id: '',
            name: '',
            address: '',
            gender: ''
        }
        // Run Time Set Properties ( Buttons text & Url Id)
        this.state = {
            selectedId: '',
            submitButtonText: ''
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
        this.setState({ gender: 'Male', submitButtonText: 'Submit' });
        this.state.selectedId = this.props.match.params.id;
        if (this.state.selectedId) {
            // Edit the record
            this.setState({ submitButtonText: 'Update' });
            this.fetchStudentDataById(this.state.selectedId);
        }
    }
    render() {
        var divButtonStyle = { paddingTop: '10px' };//style={divButtonStyle}
        return (
            <div className="container register-form" >
                <ToastrContainer />
                <form onSubmit={this.handleSubmit} method="POST">
                    <label>Name</label>
                    <input className="form-control" value={this.state.name || ''} onChange={this.logChange} name='name' />
                    <label>Address</label>
                    <textarea className="form-control" value={this.state.address || ''} onChange={this.logChange} name='address' maxLength="1000" />
                    <label>Gender</label>
                    <div>
                        <select name='gender' value={this.state.gender} onChange={this.logChange}>
                            {this.state.genders.map((e, key) => {
                                return <option key={key} value={e.value}>{e.name}</option>;
                            })}
                        </select>
                    </div>
                    <div className="submit-section paddingtop10">
                        <input type="submit" value={this.state.submitButtonText || ''} />
                    </div>
                </form>
            </div>
        )
    }
    handleSubmit(event) {
        event.preventDefault();
        this.submitStudent();
    }
    fetchStudentDataById(id) {
        let self = this;
        studentService.getStudentsDataById(id).then(data => {
            if (data) {
                self.setState({ id: data.Id, name: data.Name, address: data.Address, gender: data.Gender });
            }
        }).catch(function (err) {
            console.log(err);
        });;
    }
    logChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    submitStudent() {
        var data = {
            id: this.state.id,
            name: this.state.name,
            address: this.state.address,
            gender: this.state.gender
        }
        if (this.state.selectedId) {
            studentService.updateStudentsData(this.state.selectedId, data).then(data => {
                ToastSuccess('Record Saved');
                this.props.history.push('/List');
            }).catch(function (err) {
                ToastDanger('Error occurred');
                console.log(err);
            });
        } else {
            studentService.submitStudentsData(data).then(data => {
                ToastSuccess('Record Updated');
                this.props.history.push('/List');
            }).catch(function (err) {
                ToastDanger('Error occurred');
                console.log(err);
            });
        }
    }
}
export default Create;