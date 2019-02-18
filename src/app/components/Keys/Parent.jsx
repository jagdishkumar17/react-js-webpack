import React, { Component } from "react";
import Child from "./Child.jsx";
class Parent extends Component {
    constructor() {
        super();
          
        this.state = {
           data:[
              {
                 component: 'First...',
                 id: 1
              },
              {
                 component: 'Second...',
                 id: 2
              },
              {
                 component: 'Third...',
                 id: 3
              }
           ]
        }
     }
    render() {
        return (
            <div>
            <div>
               {this.state.data.map((dynamicComponent, i) => <Child 
                  key = {i} componentData = {dynamicComponent}/>)}
            </div>
         </div>
        );
    }
}

export default Parent;