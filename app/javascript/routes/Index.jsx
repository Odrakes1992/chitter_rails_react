import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Routes} from "react-router-dom";
import Home from "../components/Home";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);