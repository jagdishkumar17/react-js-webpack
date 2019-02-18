import React from "react";

class events extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         prop1: 'Initial data...',
         prop2: 0
      }
      this.updateStatus = this.updateStatus.bind(this);
      this.buttonEventCheck = this.buttonEventCheck.bind(this);
   };

   updateStatus(e) {
      // this method will invoked by 'myPropTwo' property which is called by child form in 
      // onChange event
      this.setState({ prop1: e.target.value });
   }
   buttonEventCheck() {
      this.state.prop2 = this.state.prop2 + 1;
      this.setState({ prop2: this.state.prop2 });
   }
   render() {
      return (
         <div>
            <ChildComponent myPropOne={this.state.prop1} myPropTwo={this.updateStatus}
               propEvent={this.buttonEventCheck} proEventValue={this.state.prop2} />
         </div>
      );
   }
}

class ChildComponent extends React.Component {
   render() {
      return (
         <div>
            <input type="text" value={this.props.myPropOne}
               onChange={this.props.myPropTwo} />
            <h3>{this.props.myPropOne}</h3>

            <button onClick={this.props.propEvent}>Event</button>
            <h3>{this.props.proEventValue}</h3>

         </div>
      );
   }


}
export default events;