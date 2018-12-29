import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import { Carousel, CarouselCaption, CarouselInner, CarouselItem } from "mdbreact";


export default class CarouselPage extends React.Component {
    render() {
      return (
        <Carousel interval={8000} activeItem={1} length={4} showControls={false} showIndicators={true} className="z-depth-1 w-100">
          <CarouselInner style={{maxHeight:'800px'}}>
            <CarouselItem itemId="1">
                <video className="video-fluid d-block w-100" autoPlay muted loop>
                    <source src="/resources/FrontPage/videos/MilkyWay.mp4" type="video/mp4" />
                </video>
              {/* <View>
                <img className="d-block w-100" src="/static/tech01.png" alt="First slide" />
                <Mask overlay="black-light" />
              </View> */}
              {/* <CarouselCaption>
                <h3 className="h3-responsive">Light mask</h3>
                <p>First text</p>
              </CarouselCaption> */}
            </CarouselItem>
            <CarouselItem itemId="2">
                <video className="video-fluid d-block w-100" autoPlay muted loop>
                    <source src="/resources/FrontPage/videos/Forest.mp4" type="video/mp4" />
                </video>
              {/* <View>
                <img className="d-block w-100" src="/static/tech02.jpg" alt="Second slide" />
                <Mask overlay="black-strong" />
              </View> */}
              {/* <CarouselCaption>
                <h3 className="h3-responsive">Strong mask</h3>
                <p>Second text</p>
              </CarouselCaption> */}
            </CarouselItem>
            <CarouselItem itemId="3">
                <video className="video-fluid d-block w-100" autoPlay muted loop>
                    <source src="/resources/FrontPage/videos/NightSky.mp4" type="video/mp4" />
                </video>
              {/* <View>
                <img className="d-block w-100" src="/static/scenery01.jpg" alt="Third slide" />
                <Mask overlay="black-slight" />
              </View> */}
              {/* <CarouselCaption>
                <h3 className="h3-responsive">Slight mask</h3>
                <p>Third text</p>
              </CarouselCaption> */}
            </CarouselItem>
            
            <CarouselItem itemId="4">
                <video className="video-fluid d-block w-100" autoPlay muted loop>
                    <source src="/resources/FrontPage/videos/Hill.mp4" type="video/mp4" />
                </video>
            </CarouselItem>

            {/* <CarouselItem itemId="4">
              <View>
                <img className="d-block w-100" src="/static/scenery02.jpg" alt="Mattonit's item" />
                <Mask overlay="black-light" />
              </View> */}
              {/* <CarouselCaption>
                <h3 className="h3-responsive">Sopot Beach</h3>
                <p>Taken june 21th by @mattonit</p>
              </CarouselCaption> */}
            {/* </CarouselItem> */}
          </CarouselInner>
        </Carousel>
      );
    }
  }