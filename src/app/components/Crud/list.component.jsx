// index.component.js

import React, { Component } from 'react';
import studentService from '../services/student.service';
class List extends Component {

    constructor() {
        super();
        this.state = { studentData: [] };
        // This binding is necessary to make "this" work in the callback  
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    componentWillMount() {
        this.fetchStudentData();
    }

    render() {
        return (

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
        )
    }

    // Handle Delete request for student 
    handleDelete(id) {
    }

    // Handle Edit request for student 
    handleEdit(id) {
        this.props.history.push("/employee/edit/" + id);
    }

    fetchStudentData() {
        let self = this;
        studentService.getStudentsData().then(data=>{
            self.setState({ studentData: data });
        });
   
    }


}
export default List;