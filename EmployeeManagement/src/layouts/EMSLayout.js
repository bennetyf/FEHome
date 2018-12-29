import React from 'react';
import Footer from "../components/Footer/Footer";
import {Container} from 'mdbreact';
export default class EMSLayout extends React.PureComponent{
    render(){
        return(
            <Container fluid={true} className="h-100 p-0">
                {this.props.children}
                <Footer/>
            </Container>
        );
    }
}