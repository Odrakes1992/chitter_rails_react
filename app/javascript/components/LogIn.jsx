import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import {FaTwitter, FaEarlybirds, FaKiwiBird} from 'react-icons/fa';
import { GiBirdHouse, GiNestBirds } from "react-icons/gi";


export default () => (

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
          <form>
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
    
  </div>
);

