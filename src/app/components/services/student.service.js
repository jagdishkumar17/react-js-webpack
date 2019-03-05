import config from '../../../../config';
import React from 'react';
var url = config['BaseUrl'] + "/api/Students";

import axios from 'axios';
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    document.getElementById("divLoader").className = "loader";
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
     document.getElementById("divLoader").className = "";

    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});
const StudentService = {

    getStudentData() {
        return axios(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json', // whatever you want
            }
        })
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    },
    getStudentsDataById(id) {
        return axios(url + "/" + id, {
            method: 'GET',
            headers: {
                'content-type': 'application/json', // whatever you want
            }
        })
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    },
    deleteStudentsData(id) {
        return axios(url + "/" + id, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json', // whatever you want
            }
        })
            .then(response => response.data)
            .catch(error => {
                throw error;
            });

    },
    submitStudentsData(data) {
        return axios(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json', // whatever you want
            },
            data: JSON.stringify(data)
        })
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    },
    updateStudentsData(id, data) {
        return axios(url + "/" + id, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json', // whatever you want
            },
            data: JSON.stringify(data)
        })
            .then(response => response.data)
            .catch(error => {
                throw error;
            });
    }
    // getStudentsData() {
    //     return fetch(url, {
    //         method: 'GET'
    //     }).then(function (response) {
    //         return response.json();
    //     });
    // },
    // getStudentsDataById(id) {
    //     return fetch(url + "/" + id, {
    //         method: 'GET'
    //     }).then(function (response) {
    //         return response.json();
    //     });
    // },
    // submitStudentsData(data) {
    //     return fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data)
    //     }).then(function (response) {
    //         return response.json();
    //     });
    // },
    // updateStudentsData(id, data) {
    //     return fetch(url + "/" + id, {
    //         method: 'PUT',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data)
    //     }).then(function (response) {
    //         return response.json();
    //     });
    // },
    // deleteStudentsData(id) {
    //     return fetch(url + "/" + id, {
    //         method: 'DELETE'
    //     }).then(function (response) {
    //         return response.json();
    //     });

    // }
}
export default StudentService;
