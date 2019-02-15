import React from "react";
import ReactDOM from "react-dom";

class ref extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         prop1: 'Initial data...'
      }
      this.updateStatus = this.updateStatus.bind(this);
      this.clearAll = this.clearAll.bind(this);

   };

   updateStatus(e) {
      // this method will invoked by 'myPropTwo' property which is called by child form in 
      // onChange event
      this.setState({ prop1: e.target.value });
   }
   clearAll() {
      // this.setState({ prop1: '' });
      ReactDOM.findDOMNode(this.refs.clearIt).focus();
      ReactDOM.findDOMNode(this.refs.clearIt).value = '';
   }
   render() {
      return (
         <div>
            <input ref="clearIt" type="text" value={this.state.prop1} onChange={this.updateStatus} />

            <h3>{this.state.prop1}</h3>

            <button onClick={this.clearAll}>Clear ALL</button>
         </div>
      );
   }
}




export default ref;