import React, { Component } from "react";
import {  Link  } from 'react-router-dom';

// what is the difference between NavLink and Link?

// the link is used to navigate the different routes on the site. 
// but NavLink is used to add the style attributes to the active routes.
class App extends Component {
    render() {
        return (
            <div>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/forms">Forms</Link></li>
            <li><Link to="/complexforms">ComplexForms</Link></li>
            <li><Link to="/refs">Refs</Link></li>
            <li><Link to="/keys">Keys</Link></li>
            <li><Link to="/users">Users</Link></li>
            </ul>
            {this.props.children}
         </div>
        );
    }
}

export default App;