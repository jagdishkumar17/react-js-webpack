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
    getStudentsDataById(id) {
        return fetch(url + "/" + id, {
            method: 'GET'
        }).then(function (response) {
            return response.json();
        });
    },
    submitStudentsData(data) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(function (response) {
            return response.json();
        });
    },
    updateStudentsData(id, data) {
        return fetch(url + "/" + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
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
