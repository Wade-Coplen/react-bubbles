import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import BubblePage from './components/BubblePage';
import Login from "./components/Login";
import "./styles.scss";

function App() {
  
  
  return (
    <div>
    <Router>
      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Route path="/public" component={Login} />
      <Route path="/login" component={Login} />
      <PrivateRoute path='/protected' component={BubblePage} />
      </Router>
    </div>
  )
}

export default App;
 