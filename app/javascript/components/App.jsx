// import React from "react";
// import Routes from "../routes/Index";

// export default props => <>{Routes}</>;


import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Routes} from "react-router-dom";
import Home from "../components/Home";
import Feed from "../components/Feed";
import Registration from "../components/Registration";
import "bootstrap/dist/css/bootstrap.min.css";
import LogIn from "./LogIn";
import axios from "axios";


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
     };
    }

  
  componentDidMount() {
    this.loginStatus()
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', 
    {withCredentials: true})

    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
      })
      .catch(error => console.log('api errors:', error))
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }


render () {
  return (
    <div>
    <Router>
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  
    <Routes>
      <Route path="/feed" element={<Feed />}></Route>
    </Routes>

    <Routes>
      <Route path="/sign_up" element={<Registration />}></Route>
    </Routes>

    <Routes>
      <Route path="/login" element={<LogIn />}></Route>
    </Routes>

  </Router>

  </div>
  
  );

}
}
  
export default App;

