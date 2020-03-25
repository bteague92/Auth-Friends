import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/loginForm";
import Friends from "./components/friends";
import './App.css';
import PrivateRoute from "./components/privateRoute";
import axios from "axios";

function App() {

  const [friends, setFriends] = useState([])

  // const getData = () => {
  //   axios
  //     .get(`http://localhost:5000/api/friends`, {
  //       headers: { authorization: localStorage.getItem("token") }
  //     })
  //     .then(res => {
  //       console.log(res)
  //       if ("token" ? setFriends(res.data) : setFriends([]));

  //     })
  // };

  // getData();

  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link>
        <Link to="/friends">Friends</Link>
        <Switch>
          <PrivateRoute path="/friends">
            <Friends friends={friends} setFriends={setFriends} />
          </PrivateRoute>
          {/* <Route path="/login">
            <Login getData={getData} />
          </Route> */}
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
