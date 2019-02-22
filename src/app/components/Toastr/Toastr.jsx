import React, { Component } from "react";
import ToastrContainer, {Toast} from 'react-toastr-basic';

class MyMainApp extends Component{ 
    constructor(props) {
        super(props);
        this.state = {
            header: "Header from props...",
            content: "Content from props..."
        }
    }

   showToast(){
      Toast('toast message');
   }

   render(){
      return( 
         <div> 
            <ToastrContainer />
            <button onClick={this.showToast}>CLICK TO TOAST</button>
         </div> 
      )
   }
}

export default MyMainApp;