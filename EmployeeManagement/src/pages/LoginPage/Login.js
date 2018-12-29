import React from 'react';
import style from "./style.scss";

import {MDBBtn} from 'mdbreact';

export default (props)=>(
    <div className={style.login_block}>
        <div className={style.container}>
            <div className={style.content}>
                <p className="text-white h1-responsive">Welcome to EMS</p>
                <form onSubmit={(evt)=>{evt.preventDefault();props.loginHandleSubmit(props.login)}}>
                    <label className={style.textlabel}>
                    Username:
                    <br/>
                    <input 
                        type="text" 
                        id ="username"
                        name="username"
                        placeholder="Name..."
                        value={props.login.username}
                        onChange={props.loginHandleChange}
                        className={(props.loginStatus === '' || props.loginStatus === 'Success')?
                            style.inputDefault:
                            style.inputInvalid}
                    />
                    </label>

                    <br/>
                    <label className={style.textlabel}>
                        Password:
                        <br/>
                        <input 
                            type="password"
                            id="pwd"
                            name="password"
                            placeholder="Pwd..."
                            autoComplete="current-password"
                            value={props.login.password}
                            onChange={props.loginHandleChange}
                            className={(props.loginStatus === '' || props.loginStatus === 'Success')?
                                style.inputDefault:
                                style.inputInvalid}
                        />
                    </label>
                    <br/>

                    <div className={(props.loginStatus === '' || props.loginStatus === 'Success')?
                                    style.valid:style.invalid}>
                        {props.loginStatus}
                    </div>

                    <br/>

                    <label className={style.checkboxlabel}>
                     <div>
                        <input 
                            type="checkbox"
                            name="rememberme"
                            checked={props.login.rememberme}
                            onChange={props.loginHandleChange}
                        />
                        <span>Remember Me</span>
                     </div>
                    </label>

                    <div className={style.formbutton}>
                    <span className={style.leftbutton}>
                        <MDBBtn color="indigo" size="sm" type="submit">
                            <span>Login</span>
                        </MDBBtn>
                    </span>
                    <span className={style.rightbutton}>
                        <MDBBtn color="indigo" size="sm" onClick={props.registerHandleToggle}>
                            <span>SignUp</span>
                        </MDBBtn>
                    </span>
                        {/* <Link to='/EMS/homepage'>GoTo</Link> */}
                    </div>
                </form>
            </div>
        </div>
    </div>
);
