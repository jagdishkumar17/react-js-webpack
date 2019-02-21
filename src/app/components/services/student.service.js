import config from '../../../../config';
import React from 'react';
var url = config['BaseUrl'] + "/api/Students";
const StudentService = {

    getStudentsData() {
        return fetch(url, {
            method: 'GET'
        }).then(function (response) {
            return response.json();
        });

    },
    deleteStudentsData(id) {
        return fetch(url + "/" + id, {
            method: 'DELETE'
        }).then(function (response) {
            return response.json();
        });

    }
}
export default StudentService;
