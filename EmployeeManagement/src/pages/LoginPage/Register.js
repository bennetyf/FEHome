import React from 'react';
import style from "./style.scss";
import dynamic from 'umi/dynamic';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import {MDBBtn, Container, Modal, ModalBody, ModalHeader, ModalFooter} from 'mdbreact';


export default dynamic ({
    loading: ()=>null,

    loader:async ()=>(props)=>(
    <Container className={style.modal}>
        <Modal isOpen={props.register.modal} toggle={props.registerHandleToggle} backdrop={false} centered>
            <ModalHeader toggle={props.registerHandleToggle}>
                <span className="font-weight-bold">Register A New User</span>
            </ModalHeader>

            <form onSubmit={(evt)=>{evt.preventDefault();props.registerHandleSubmit(props.register)}}>
                <ModalBody className={style.modalbody}>
                    <label className={style.textlabel}>
                        <span>Email:</span>
                        <br/>
                            
                        <input
                            type="email"
                            id ="email"
                            name="email"
                            placeholder="address@example.com"
                            value={props.email}
                            onChange={props.registerHandleChange}
                            className={props.register.formIsFirst.email?
                                        null:
                                        (props.register.formValidity.email?
                                        null:
                                        style.inputInvalid)}
                        />
                    </label>
                    <div className={props.register.formValidity.email?style.valid:style.invalid}>
                        {props.register.formErrors.email}
                    </div>
                    <br/>
                    <label className={style.textlabel}>
                        <span>Username:</span>
                        <br/>

                        <input 
                            type="text"
                            id ="username"
                            name="username"
                            autoComplete="username"
                            placeholder="Username"
                            value={props.register.username}
                            onChange={props.registerHandleChange}
                            className={props.register.formIsFirst.username?
                                        null:
                                        (props.register.formValidity.username?
                                        null:
                                        style.inputInvalid)}
                        />
                    </label>
                    <div className={props.register.formValidity.username?style.valid:style.invalid}>
                        {props.register.formErrors.username}
                    </div>

                    <br/>
                    <label className={style.textlabel}>
                        <span>Password:</span>
                        <br/>

                        <input 
                            type="password"
                            id="pwd"
                            name="password"
                            autoComplete="current-password"
                            placeholder="Password"
                            value={props.register.password}
                            onChange={props.registerHandleChange}
                            className={props.register.formIsFirst.password?
                                    null:
                                    (props.register.formValidity.password?
                                    null:
                                    style.inputInvalid)}
                        />
                    </label>
                    <div className={props.register.formValidity.password?style.valid:style.invalid}>
                        {props.register.formErrors.password}
                    </div>

                </ModalBody>

                <ModalFooter className={style.modalfooter}>
                    <MDBBtn color="primary" type="submit" size="sm" disabled={props.register.isSubmitDisabled}><span>SignUp</span></MDBBtn>
                    <MDBBtn color="secondary" onClick={props.registerHandleToggle} size="sm"><span>Cancel</span></MDBBtn>
                </ModalFooter>

            </form>
        </Modal>
    </Container>
    )}
);