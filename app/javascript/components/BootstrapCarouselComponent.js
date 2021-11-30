import React from 'react';
import {Carousel} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import {FaTwitter, FaEarlybirds, FaKiwiBird} from 'react-icons/fa';
import {GiBirdCage, GiBirdHouse, GiBirdMask, GiBirdTwitter, GiEgyptianBird, GiNestBirds, GiHummingbird} from 'react-icons/gi';


class BootstrapCarouselComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        index: 1, //index which u want to display first
        direction: null, ////direction of the carousel..u need to set it to either 'next' or 'prev' based on user click
        // interval: (1000),
      };
    }

    render() {

      return (
        <div>
          <div className="container">
            <div className="row" >
            </div>
            <div className="row">
              <div className="col-sm-12" >
                <Carousel interval="3000">
      
                  <Carousel.Item>
                    <FaEarlybirds style={{fontSize: '50px'}}/>
                  </Carousel.Item>
                  

                
                  <Carousel.Item>
                    <FaKiwiBird style={{fontSize: '50px'}}/>
                  </Carousel.Item>
               

                  
                  <Carousel.Item>
                    <GiEgyptianBird style={{fontSize: '50px'}}/>
                  </Carousel.Item>
                </Carousel>
                

              </div>
            </div>
          </div>
        </div>
      )
    }
}


export default BootstrapCarouselComponent;