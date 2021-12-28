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

  componentDidMount() {
   
    return this.props.loggedInStatus ? this.redirect() : null
  }

  handleChange = (event) => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })
    };
  handleSubmit = (event) => {
      event.preventDefault()
      const {email, password} = this.state

      let user = {
        email: email,
        password: password
      }

      axios.post('http://localhost:3001/login', {user}, {withCredentials: true})
      .then(response => {
        if (response.data.logged_in) {
          this.props.handleLogin(response.data)
          this.redirect()
        } else {
          this.setState({
            errors: response.data.errors
          })
        }
      })
      .catch(error => console.log('api errors:', error))
    };

    redirect = () => {
        this.props.history.push('/')
      }

    handleErrors = () => {
        return (
          <div>
            <ul>
            {this.state.errors.map(error => {
            return <li key={error}>{error}</li>
              })}
            </ul>
          </div>
        )
      }



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
            <Form className="container auto" onSubmit = {this.handleSubmit}>
              
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={this.handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              
            </Form>
          </div>

          <div>
            {
              this.state.errors ? this.handleErrors() : null
            }
          </div>

        </div>
      </div>


    )

  }
}


export default Login;
