// index.component.js

import React, { Component } from 'react';
import studentService from '../services/student.service';
import { FormattedMessage } from 'react-intl';
import "../../styles/Dashboard.css";
import ToastrContainer, { ToastDanger, ToastSuccess } from 'react-toastr-basic';
class List extends Component {

    constructor() {
        super();
        this.state = { studentData: [] };
        // This binding is necessary to make "this" work in the callback  
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.navigateToAddStudent = this.navigateToAddStudent.bind(this);

    }
    componentWillMount() {
        this.fetchStudentData();
    }


    render() {
        return (
            <div>
                <ToastrContainer />
                <table className='table'>
                    <thead>
                        <tr>
                            <th><FormattedMessage id="List.Name" defaultMessage="Name" /></th>
                            <th><FormattedMessage id="List.Gender" defaultMessage="Gender" /></th>
                            <th><FormattedMessage id="List.Address" defaultMessage="Address" /></th>
                            <th><FormattedMessage id="List.Actions" defaultMessage="Actions" /></th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.studentData.map((student, i) =>
                            <tr key={i}>
                                <td>{student.Name}{this._baseUrl}</td>
                                <td>{student.Gender}</td>
                                <td>{student.Address}</td>
                                <td>
                                    <a className="action pointer" onClick={(id) => this.handleEdit(student.Id)}>Edit</a>  |
                                <a className="action pointer" onClick={(id) => this.handleDelete(student.Id)}>Delete</a>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <FormattedMessage id="Student.addnew" defaultMessage="Add New">
                                    {
                                        (msg) =>
                                            (
                                                <button type="button" title={msg} onClick={this.navigateToAddStudent}>{msg}</button>
                                            )
                                    }
                                </FormattedMessage>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

    // Handle Delete request for student 
    handleDelete(id) {
        if (confirm('Are you sure you want to delete this student?')) {
            this.deleteStudentData(id);
        }
    }

    // Handle Edit request for student 
    handleEdit(id) {
        this.props.history.push("/create/" + id);
    }
    navigateToAddStudent() {
        this.props.history.push("/Create/");
    }
    fetchStudentData() {
        let self = this;
        studentService.getStudentsData().then(data => {
            self.setState({ studentData: data });
        });

    }
    deleteStudentData(id) {
        let self = this;
        studentService.deleteStudentsData(id).then(data => {
            var students = self.state.studentData;
            var idx = students.findIndex(item => item.Id === id);
            students.splice(idx, 1);
            self.setState({ studentData: students });
            ToastSuccess('Record deleted successfully');
        }).catch(function (err) {
            ToastDanger('Error occurred');
            console.log(err);
        });

    }

}
export default List;