// import React from "react";
// import Routes from "../routes/Index";

// export default props => <>{Routes}</>;


import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Routes} from "react-router-dom";
import Home from "../components/Home";
import Feed from "../components/Feed"
import Registration from "../components/Registration";
import "bootstrap/dist/css/bootstrap.min.css";
import LogIn from "./LogIn";

export default function App() {


  return (

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

  
  )

}
  