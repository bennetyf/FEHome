import React from "react";

import {Container} from 'mdbreact';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default class BasicLayout extends React.Component{
    render(){
        return(
            <Container fluid={true} className="p-0 h-100">
                <Header/>                   
                {this.props.children}
                <Footer/>
            </Container>
        )
    }
}
