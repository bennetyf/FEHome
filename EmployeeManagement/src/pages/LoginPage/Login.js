import React from 'react';
import style from "./style.scss";
import {Checkbox,Button,Icon} from 'antd';

export default (props)=>(
    <div className={style.login_block}>
        <div className={style.container}>
            <div className={style.content}>
                <p className="text-white h1-responsive">Welcome to EMS</p>

                <form onSubmit={(evt)=>{evt.preventDefault();props.loginHandleSubmit(props.login)}}>
                
                <label className={style.textlabel} htmlFor="username">Username:</label>

                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon">
                        <i className="fa fa-user prefix"></i>
                        </span>
                    </div>
                    <input 
                        type="text" 
                        id ="username"
                        name="username"
                        autoComplete="username"
                        placeholder="Username"
                        value={props.login.username}
                        onChange={props.loginHandleChange}
                        className={(props.loginStatus === '' || props.loginStatus === 'success')?
                                    style.inputDefault:
                                    style.inputInvalid}
                    />
                </div>

                <label className={style.textlabel} htmlFor="password">Password:</label>

                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fa fa-lock prefix"></i>
                        </span>
                    </div>
                    <input 
                            type="password"
                            id="pwd"
                            name="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            value={props.login.password}
                            onChange={props.loginHandleChange}
                            className={(props.loginStatus === '' || props.loginStatus === 'success')?
                                        style.inputDefault:
                                        style.inputInvalid}
                    />
                </div>

                <div className={(props.loginStatus === '' || props.loginStatus === 'success')?
                                style.valid:style.invalid}>
                    {props.loginStatus}
                </div>

                <div className={style.annotation}>
                    <div className={style.rememberMeWrapper}>
                        {/* <input 
                            id="rememberMe"
                            type="checkbox"
                            name="rememberme"
                            checked={props.login.rememberme}
                            onChange={props.loginHandleChange}
                        /> */}
                        <Checkbox
                            name="rememberme"
                            checked={props.login.rememberme}
                            onChange={props.loginHandleChange}
                        >
                            Remember Me
                        </Checkbox>
                    </div>

                    <div className={style.forgetPwdWrapper}>
                        <a className={style.forgetPwdLabel} href="#">Forget Password?</a>
                    </div>
                </div>

                <div className={style.formbutton}>
                    <input type="submit" style={{display:`none`}}/>
                    <Button type="primary" size="large" className={style.leftbutton} onClick={()=>props.loginHandleSubmit(props.login)}>
                        <div className="d-flex align-items-center justify-content-center w-100 h-100" style={{fontSize:`1.25rem`}}>
                            <Icon type={props.login.buttontype} style={{marginRight:`8px`}}/> 
                            <span>LogIn</span>
                        </div>
                    </Button>
                    <Button type="secondary" size="large" className={style.rightbutton} onClick={props.registerHandleToggle}>
                        <div className="d-flex align-items-center justify-content-center w-100 h-100" style={{fontSize:`1.25rem`}}>
                            <Icon type="user-add" style={{marginRight:`5px`}}/> 
                            <span>SignUp</span>
                        </div>
                    </Button>
                </div>
            </form>
        </div>
    </div>
</div>
);
