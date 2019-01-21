import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import style from "./style.scss";

import {Container, Row, Col, MDBBtn} from 'mdbreact';
import Link from "umi/link";
import Ring from "./Ring";

export default class allSystems extends React.PureComponent{
    render(){
        return(
            <Container fluid={true}>
                <Row className={style.systems_bg}>
                    <Col size="9" className="m-auto">
                        <div className={style.systems_header}>
                            <div>All Systems</div>
                        </div>
                        <div className={style.rings}>
                            <Ring systemName={"Employee Management System"}>
                                <MDBBtn href="/EMS/Home" size="lg" color="warning">
                                    <span>Learn More</span>
                                </MDBBtn>
                            </Ring>
                            <Ring systemName={"BBS System"}>
                                <MDBBtn size="lg" color="warning"><span>Learn More</span></MDBBtn>
                            </Ring>
                            <Ring systemName={"Online Chatroom"}>
                                <MDBBtn size="lg" color="warning"><span>Learn More</span></MDBBtn>
                            </Ring>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}
