import React, {Component} from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import {FaTwitter, FaEarlybirds, FaKiwiBird} from 'react-icons/fa';
import { GiBirdHouse, GiNestBirds } from "react-icons/gi";


class Registration extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      first_name: '',
      last_name: '',
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
    console.log('everything is fine')
      event.preventDefault()
      const {username, first_name, last_name, email, password} = this.state
      let user = {
        username: username,
        email: email,
        first_name: first_name,
        last_name: last_name,
        password: password
      }
      console.log('this is the step before post')

      axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
      .then(response => {
      if (response.data.status === 'created') {
        this.props.handleLogin(response.data)
        this.redirect()
        
      } else {
        this.setState({
          errors: response.data.errors
        })
        prompt("something went wrong")
        console.log('something went wrong here ')
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
          <ul>{this.state.errors.map((error) => {
            return <li key={error}>{error}</li>
          })}
          </ul> 
        </div>
      )
    }

  

  render() {
      const {username, first_name, last_name, email, password} = this.state

  return(


    <div className="vw-100 vh-100 primary-color align-items-center justify-content-center">
      <div className="row" style={{margin: '50px' }}>
        <div style={{padding: '35px'}}>
          <h1 className="display-4" style={{textAlign: 'center' }}> Start your Chitter journey <GiBirdHouse/></h1>
          <p className="lead" style={{textAlign: 'center' }}>
          Sign up below.
          </p>
          <hr className="my-4" />
        </div>

        <div className="container secondary-color">
          <Form className="container auto" onSubmit={this.handleSubmit}>

              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="J.Dot" name="username" value={username} onChange={this.handleChange}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Jack" name="first_name" value={first_name} onChange={this.handleChange}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Dorsey" name="last_name" value={last_name} onChange={this.handleChange}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={this.handleChange}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
              </Form.Group>
              <Form.Group controlId="formFileSm" className="mb-3">
                <Form.Label>Profile Pic</Form.Label>
                <Form.Control type="file" size="sm" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
          </Form>
        </div>

      </div>
      <div>
          {
            this.state.errors ? this.handleErrors() : null
          }
      </div>
      
    </div>

  )
  }


}



export default Registration;
