import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import {FaTwitter, FaEarlybirds, FaKiwiBird} from 'react-icons/fa';
import { GiBirdHouse, GiNestBirds } from "react-icons/gi";


export default () => (

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
        <Form className="container auto">
          <form>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="JackD" />
            </Form.Group>
          </form>
          <form>
            <Form.Group className="mb-3" controlId="formGroupFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Jack" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Dorsey" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formFileSm" className="mb-3">
              <Form.Label>Profile Pic</Form.Label>
              <Form.Control type="file" size="sm" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>

    </div>
    
  </div>
);







{/* <div className="container secondary-color">
      <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formFileSm" className="mb-3">
        <Form.Label>Small file input example</Form.Label>
        <Form.Control type="file" size="sm" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> 


      </div> */}