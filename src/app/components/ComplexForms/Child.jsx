import React from "react";
import InnerChild from "./InnerChild.jsx" 
class Child extends React.Component {

   render() {
      return (
         <div>
            <input type = "text" value = {this.props.myDataProp} 
               onChange = {this.props.updateStateProp} />
            <h3>{this.props.myDataProp}</h3>
            <InnerChild></InnerChild>
         </div>
      );
   }
}

export default Child;