import React from "react";
import Child from "./Child.jsx";

class ParentComponent extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         data: 'Initial data...'
      }
      this.updateState = this.updateState.bind(this);
   };
   updateState(e) {
      this.setState({ data: e.target.value });
   }
   render() {
      return (
         <div>
            <Child myDataProp = {this.state.data}
               updateStateProp = {this.updateState}></Child>
         </div>
      );
   }
}

export default ParentComponent;