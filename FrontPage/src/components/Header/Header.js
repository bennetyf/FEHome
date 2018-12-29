import React from 'react';
import NavigationBar from "../NavBar/NavBarTrans";
import MainCarousel from "../Carousel/MainCarousel";
import FrontWords from "../Carousel/FrontWords";

import {Row, Col} from 'mdbreact';

export default () => (
    <Row>
       <Col size="12">
            <NavigationBar />
            <MainCarousel />
            <FrontWords />
        </Col>
    </Row>
)