// index.component.js

import React, { Component } from 'react';
import studentService from '../services/student.service';
import { FormattedMessage } from 'react-intl';
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
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Address</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.studentData.map((student, i) =>
                            <tr key={i}>
                                <td>{student.Name}{this._baseUrl}</td>
                                <td>{student.Gender}</td>
                                <td>{student.Address}</td>
                                <td>
                                    <a className="action" onClick={(id) => this.handleEdit(student.Id)}>Edit</a>  |
                                <a className="action" onClick={(id) => this.handleDelete(student.Id)}>Delete</a>
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
        this.props.history.push("/employee/edit/" + id);
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
            var idx = students.find(item => item.Id === id);
            students.splice(idx, 1);
            self.setState({ studentData: students });
        }).catch(function (err) {
            console.log(err);
        });;

    }

}
export default List;