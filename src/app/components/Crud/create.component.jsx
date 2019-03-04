// create.component.js

import React, { Component } from 'react';
import "../../styles/Dashboard.css";
import '../../styles/App.css';
import studentService from '../services/student.service';
import Spinner from '../../Spinner/Spinner.jsx'

import ToastrContainer, { ToastDanger, ToastSuccess } from 'react-toastr-basic';
class Create extends Component {
    constructor() {
        super();
        // Student Model Properties and Run Time Set Properties ( Buttons text & Url Id)
        this.state = {
            loading: false,
            student: {
                id: '',
                name: '',
                address: '',
                gender: '',
            },
            genders: [
                { value: '', name: 'Select' },
                { value: 'Male', name: 'Male' },
                { value: 'Female', name: 'Female' }
            ],
            selectedId: '',
            submitButtonText: '',
            errors: {
            },
        }
        // Event handlers     
        this.handleSubmit = this.handleSubmit.bind(this)
        this.logChange = this.logChange.bind(this)
        this.removeValidation = this.removeValidation.bind(this)
    }
    componentDidMount() {
        this.setState({ submitButtonText: 'Submit' });
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
                    <input className="form-control" value={this.state.student.name || ''} onChange={this.logChange} name='name' />
                    <div className="errorMsg">{this.state.errors.name}</div>
                    <label>Address</label>
                    <textarea className="form-control" value={this.state.student.address || ''} onChange={this.logChange} name='address' maxLength="1000" />
                    <div className="errorMsg">{this.state.errors.address}</div>

                    <label>Gender</label>
                    <div>
                        <select name='gender' value={this.state.student.gender} onChange={this.logChange}>
                            {this.state.genders.map((e, key) => {
                                return <option key={key} value={e.value}>{e.name}</option>;
                            })}
                        </select>
                        <div className="errorMsg">{this.state.errors.gender}</div>

                    </div>
                    <div className="submit-section paddingtop10">
                        <input type="submit" value={this.state.submitButtonText || ''} />
                    </div>
                    <Spinner loading={this.state.loading}></Spinner>
                </form>
            </div>
        )
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.validateForm()) {
            this.submitStudent();
        }
    }
    fetchStudentDataById(id) {
        this.setSpinner(true);
        let self = this;
        studentService.getStudentsDataById(id).then(data => {
            if (data) {
                self.setState({ student: { id: data.Id, name: data.Name, address: data.Address, gender: data.Gender } });
            }
            self.setSpinner(false);
        }).catch(function (err) {
            console.log(err);
            this.setSpinner(false);
        });;
    }
    logChange(e) {
        let student = this.state.student;
        student[e.target.name] = e.target.value;
        this.setState({
            student
        });
        this.removeValidation(e);
    }
    validateForm() {
        let student = this.state.student;
        let errors = {};
        let formIsValid = true;

        if (!student["name"]) {
            formIsValid = false;
            errors["name"] = "*Required";
        }
        if (!student["address"]) {
            formIsValid = false;
            errors["address"] = "*Required";
        }
        if (!student["gender"]) {
            formIsValid = false;
            errors["gender"] = "*Required";
        }
        this.setState({
            errors: errors
        });
        return formIsValid;
    }
    removeValidation(e) {
        let self = this;
        const type = e.target.name;
        let student = self.state.student;
        let errors = self.state.errors;
        if (!student[type]) {
            errors[type] = "*Required";
        } else {
            errors[type] = "";
        }
        this.setState({
            errors: errors
        });
    }
    submitStudent() {
        this.setSpinner(true);
        let self = this;
        var data = {
            id: this.state.student.id,
            name: this.state.student.name,
            address: this.state.student.address,
            gender: this.state.student.gender
        }
        if (this.state.selectedId) {

            studentService.updateStudentsData(this.state.selectedId, data).then(data => {
                self.setSpinner(false);
                ToastSuccess('Record updated successfully');
                this.props.history.push('/List');

            }).catch(function (err) {
                self.setSpinner(false);
                ToastDanger('Error occurred');
                console.log(err);

            });
        } else {
            studentService.submitStudentsData(data).then(data => {
                this.setSpinner(false);
                ToastSuccess('Record inserted successfully');
                this.props.history.push('/List');
            }).catch(function (err) {
                ToastDanger('Error occurred');
                console.log(err);
                self.setSpinner(false);
            });
        }

    }
    setSpinner(type) {
        this.setState({ loading: type });
    };
}
export default Create;