import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch, HashRouter } from 'react-router-dom';
 import Instance from "./app/components/App.jsx";
// import Instance from "./app/components/Forms/input.jsx";
// import Instance from "./app/components/Events/events.jsx";
// import Instance from "./app/components/State/stateAndProps.jsx";
// import Instance from "./app/components/ForceUpdate/forceUpdateAndsetState.jsx";
// import Instance from "./app/components/ReactDom/reactDom.jsx";
// import Instance from "./app/components/LifeCycle/Lifecycle.jsx";

ReactDOM.render(<Instance />, document.getElementById("root"));
