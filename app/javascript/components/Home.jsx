import React from "react";
import BootstrapCarouselComponent from "./BootstrapCarouselComponent";
import { Link } from "react-router-dom";
import {FaTwitter, FaEarlybirds, FaKiwiBird} from 'react-icons/fa';
import {GiBirdCage, GiBirdHouse, GiBirdMask, GiBirdTwitter, GiEgyptianBird, GiNestBirds, GiHummingbird} from 'react-icons/gi';

export default () => (


  
  <div className="vw-100 vh-100 primary-color align-items-center justify-content-center">
    <div className="row" style={{margin: '50px' }}>
          <div className="container secondary-color">
              <div className="Carousel">
                <BootstrapCarouselComponent></BootstrapCarouselComponent>
              </div>
          </div>
    </div>
    <div style={{padding: '35px'}}></div>

    <div className="row">
<div className="jumbotron jumbotron-fluid bg-transparent">
  <div className="container secondary-color"  style={{textAlign: 'center'}}>
    <h1 className="display-4"> Hello World. Welcome to Chitter</h1>
    <p className="lead">
      We are good at mimicking Twitter <FaTwitter/>
    </p>
    <hr className="my-4" />
    <Link
      to="/peeps"
      className="btn btn-lg custom-button"
      role="button"
    >
      View Tweets
    </Link>
  </div>
</div>
</div>

    
  </div>
);


 
<div className="row">
<div className="jumbotron jumbotron-fluid bg-transparent">
  <div className="container secondary-color">
    <h1 className="display-4"> Hello World. Welcome to Chitter</h1>
    <p className="lead">
      We are good at mimicking Twitter <FaTwitter/>
    </p>
    <hr className="my-4" />
    <Link
      to="/peeps"
      className="btn btn-lg custom-button"
      role="button"
    >
      View Tweets
    </Link>
  </div>
</div>
</div>