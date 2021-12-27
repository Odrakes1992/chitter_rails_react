import React, {Component} from "react";
import axios from 'axios';
import { Form, Button } from "react-bootstrap";
import {FaTwitter, FaEarlybirds, FaKiwiBird} from 'react-icons/fa';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: '',
      errors: ''
     };
  }
handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };
handleSubmit = (event) => {
    event.preventDefault()
  };


render() {
    const {email, password} = this.state

  return (

    <div className="vw-100 vh-100 primary-color align-items-center justify-content-center">
    <div className="row" style={{margin: '50px' }}>
      <div style={{padding: '35px'}}>
        <h1 className="display-4" style={{textAlign: 'center' }}> Welcome back friend <FaKiwiBird/></h1>
        <p className="lead" style={{textAlign: 'center' }}>
        Sign in below.
        </p>
        <hr className="my-4" />
      </div>

      <div className="container secondary-color">
        <Form className="container auto">
          <form onSubmit = {this.handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>

    </div>

    <Button
              href="/sign_up"
              className="btn btn-lg custom-button"
        >
              Sign Up 
        </Button>
    
  </div>


  )

}
}


export default Login;
