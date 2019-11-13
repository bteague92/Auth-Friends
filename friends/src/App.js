import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/loginForm";
import Friends from "./components/friends";
import './App.css';
import PrivateRoute from "./components/privateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link>
        <Link to="/friends">Friends</Link>
        <Switch>
          <PrivateRoute path="/friends">
            <Friends />
          </PrivateRoute>
          <Route path="/login" component={Login} />
        </Switch>
      </div>
      {/* <Link to="/login">Login</Link>
      <Link to="/friends">Friends</Link>
      <Route path="/login" component={Login} />
      <Route path="/friends" component={Friends} /> */}

    </Router>
  );
}

export default App;
