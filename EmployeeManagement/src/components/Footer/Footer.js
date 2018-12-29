import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import style from "./style.scss";

import {Container, Row, Col, Fa} from 'mdbreact';

export default ()=>(
    <Container fluid={true}>
        <Row className="bg-dark text-white pt-4 mb-2">
            <Col size="4" className={style.contacts}>
                <div className={style.title}>Contacts:</div>
                <div className={style.entry}>
                    <Fa icon="address-card-o" size="lg" className={style.icon}/>
                    <div className="mt-0, ml-3">
                        Room 412, Computer Science and Engineering<br/>
                        UNSW Sydney, High St<br/>
                        Kensington, NSW 2052, Australia<br/>
                    </div>
                </div>
                <div className={style.entry}>
                    <Fa icon="phone" size="lg" className={style.icon}/>
                    <div className="ml-3"><a href="tel:(+61)422360724" target="_blank">(+61) 422360724</a></div>
                </div>
                <div className={style.entry}>
                    <Fa icon="envelope" size="lg" className={style.icon}/>
                    <div className="ml-3">
                        <a href="mailto:bennetyf@gmail.com" target="_blank">bennetyf@gmail.com</a><br/>
                        <a href="mailto:bennetyf@foxmail.com" target="_blank">bennetyf@foxmail.com</a><br/>
                    </div>
                </div>
            </Col>
            <Col size="4">

            </Col>
            <Col size="4" className={style.followMe}>
                <div className={style.title}>Follow Me:</div>
                <a href="https://scholar.google.com.au/citations?user=pmV2l0YAAAAJ&hl=en" target="_blank">
                <div className={style.entry}>
                    <Fa icon="google" size="lg" className={style.icon}/>
                    <div className="ml-3">Google Scholar</div>
                </div>
                </a>
                <a href="https://www.researchgate.net/profile/Feng_Yuan22" target="_blank">
                <div className={style.entry}>
                    <Fa icon="mortar-board" size="lg" className={style.icon}/>
                    <div className="ml-2">Research Gate</div>
                </div>
                </a>
                <a href="https://github.com/bennetyf" target="_blank">
                <div className={style.entry}>
                    <Fa icon="github" size="lg" className={style.icon}/>
                    <div className="ml-3">GitHub</div>
                </div>
                </a>
                <div className={style.social_media}>
                    <div className="mr-3">Social Media:</div>
                    <a href="https://www.facebook.com/profile.php?id=100006874840870" target="_blank"><Fa icon="facebook-square" size="lg" className={style.icon}/></a>
                    <a href="https://www.linkedin.com/in/feng-yuan-10ba2b75/" target="_blank"><Fa icon="linkedin-square" size="lg" className={style.icon}/></a>
                    <a href="https://twitter.com/Bennet15614634" target="_blank"><Fa icon="twitter-square" size="lg" className={style.icon}/></a>
                    <a href="https://plus.google.com/u/0/110752567647903784834" target="_blank"><Fa icon="google-plus-circle" size="lg" className={style.icon}/></a>
                </div>
            </Col>
        </Row>
    </Container>
)