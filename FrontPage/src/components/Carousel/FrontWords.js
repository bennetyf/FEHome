import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import style from "./style.scss";
import { MDBBtn } from "mdbreact";


export default class FrontWords extends React.PureComponent{
    render(){
        return(
            <div className={style.overlay}>
                <div className="d-flex flex-column justify-content-around align-items-end">
                    <h1 className="text-white font-weight-bold">Enjoy Your Adventrue</h1>
                    <MDBBtn color="cyan" size="lg">Learn More</MDBBtn>
                </div>
            </div>
        );
    }
}