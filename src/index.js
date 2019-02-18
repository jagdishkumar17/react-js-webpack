import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router ,Switch } from 'react-router-dom';
import App from "./app/components/App.jsx";
import Input from "./app/components/Forms/Input.jsx";
import Ref from "./app/components/Refs/Ref.jsx";
import Parent from "./app/components/Keys/Parent.jsx";
import ParentComponent from "./app/components/ComplexForms/ParentComponent.jsx";
import Users from "./app/components/Users/Users.jsx";
ReactDOM.render((
    <Router >
        <App>
        <Switch >
            {/* <Route  path="/" component={App} /> */}
            <Route path="/complexforms" component={ParentComponent} />
            <Route path="/refs" component={Ref} />
            <Route path="/keys" component={Parent} />
            <Route path="/forms" component={Input} />
            <Route path="/users" component={Users} />
            <Route path="/users/:id" component={Users} />
        </Switch >
        </App>
    </Router>
), document.getElementById('root'))
