import React, { useState } from "react";
import {BubbleContext} from './Contexts/BubbleContext';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import AuthForm from'./components/AuthForm';

import Login from "./components/Login";
import "./styles.scss";

function App() {
  const [colors, setColors] = useState([]);
  return (
    <Router>
      <BubbleContext Provider>
        <div className="App">
          <Navigation />
          <Route exact path="/" component={Login} />
          <Route path= "/login" render = { _ => <AuthForm role = "login" /> }/>
        </div>
      </BubbleContext>
    </Router>
  );
}

export default App;
 