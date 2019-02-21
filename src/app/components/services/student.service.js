import config from '../../../../config';
import React from 'react';
const StudentService = {

    getStudentsData() {
       
     var url = config['BaseUrl'] + "/api/Students";
      return fetch(url, {
            method: 'GET'
        }).then(function (response) {
            return response.json();
        });

    }
}
export default StudentService;
