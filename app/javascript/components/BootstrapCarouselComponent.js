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
          <div className="container-fluid">
            <div className="row" >
            </div>
            <div className="row">
              <div className="col-sm-12" style={{textAlign: 'center'}} >
                <Carousel interval="4000">
                  
                  <Carousel.Item>
                    <FaTwitter style={{fontSize: '80px'}}/>
                  </Carousel.Item>
                  
                  <Carousel.Item>
                    <FaEarlybirds style={{fontSize: '80px'}}/>
                  </Carousel.Item>
                  
                 
                
                  <Carousel.Item>
                    <FaKiwiBird style={{fontSize: '80px'}}/>
                  </Carousel.Item>
               
                  <Carousel.Item>
                    <GiHummingbird style={{fontSize: '80px'}}/>
                  </Carousel.Item>

                  
                  <Carousel.Item>
                    <GiEgyptianBird style={{fontSize: '80px'}}/>
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