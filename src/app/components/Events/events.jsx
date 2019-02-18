import React from "react";

class events extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         prop1: '',
      }
      this.updateStatus = this.updateStatus.bind(this);
   };

   updateStatus(e) {
      // this method will invoked by 'myPropReturn' property which is called by child form in 
      // onChange event
      this.setState({ prop1: e.target.value });
   }


   render() {
      return (
         <div>
            <h1>This is parent page content</h1>
            <h3>{this.state.prop1}</h3>
            <h1>This is child page content</h1>
            <ChildComponent myPropReturn={this.updateStatus} />
         </div>
      );
   }
}

class ChildComponent extends React.Component {
   render() {
      return (
         <div>
            <input type="text" ref="myText"
               onChange={this.props.myPropReturn} />

         </div>
      );
   }


}
export default events;