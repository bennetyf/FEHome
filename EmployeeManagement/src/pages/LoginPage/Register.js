import React from 'react';
import style from "./style.scss";
import dynamic from 'umi/dynamic';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

import {Container, Modal, ModalBody, ModalHeader, ModalFooter} from 'mdbreact';

import {Input, Icon, Button} from 'antd';

// import MyInput from './Input';

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
                    {/* <label htmlFor="myinput">MyInput</label>
                    <MyInput 
                        id="myinput"
                        type="text"
                        // prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.5)' }} />}
                    /> */}

                    <label className={style.textlabel} htmlFor="email">Email:</label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="address@example.com"
                        size="large"
                        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.5)' }} />}
                        value={props.register.email}
                        onChange={props.registerHandleChange}
                        onFocus={(evt)=>props.registerHandleFocusState(evt,true)}
                        onBlur={(evt)=>props.registerHandleFocusState(evt,false)}
                        className={!props.register.isSubmitDisabled && !props.register.formValidity.email && !props.register.isOnFocus.email?
                                    style.inputInvalid:
                                    null}
                        addonAfter={<Icon type="close-circle" onClick={props.registerClearEmail}/>}
                    />                
                    <p className={props.register.formValidity.email?style.valid:style.invalid}>
                        {props.register.formErrors.email}
                    </p>
                    
                    <label className={style.textlabel} htmlFor="reg_username">Username:</label>
                    <Input
                        type="text"
                        name="username"
                        id="reg_username"
                        placeholder="Username"
                        size="large"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.5)' }} />}
                        value={props.register.username}
                        onChange={props.registerHandleChange}
                        onFocus={(evt)=>props.registerHandleFocusState(evt,true)}
                        onBlur={(evt)=>props.registerHandleFocusState(evt,false)}
                        className={!props.register.isSubmitDisabled && !props.register.formValidity.username && !props.register.isOnFocus.username?
                                    style.inputInvalid:
                                    null}
                        addonAfter={<Icon type="close-circle" onClick={props.registerClearUsername}/>}
                    />
                        
                    <p className={props.register.formValidity.username?style.valid:style.invalid}>
                        {props.register.formErrors.username}
                    </p>

                    <label className={style.textlabel} htmlFor="password">Password:</label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        size="large"
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.5)' }} />}
                        value={props.register.password}
                        onChange={props.registerHandleChange}
                        onFocus={(evt)=>props.registerHandleFocusState(evt,true)}
                        onBlur={(evt)=>props.registerHandleFocusState(evt,false)}
                        className={!props.register.isSubmitDisabled && !props.register.formValidity.password && !props.register.isOnFocus.password?
                                    style.inputInvalid:
                                    null}
                        addonAfter={<Icon type="close-circle" onClick={props.registerClearPassword}/>}
                    />
                    <p className={props.register.formValidity.password?style.valid:style.invalid}>
                        {props.register.formErrors.password}
                    </p>

                </ModalBody>

                <ModalFooter className={style.modalfooter}>
                    <Button type="primary" 
                        disabled={props.register.isSubmitDisabled}
                        loading={props.register.loadingStatus}
                        onClick={(evt)=>{evt.preventDefault();props.registerHandleSubmit(props.register)}}
                        className={style.button}> 
                        Submit
                    </Button>
                    
                    <Button type="danger" onClick={props.registerHandleToggle} className={style.button}>
                        Cancel
                    </Button>
                </ModalFooter>
                <input type="submit" style={{display:`none`}}/>
            </form>
        </Modal>
    </Container>
    )}
);