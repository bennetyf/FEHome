import React,{Fragment} from 'react';
import Redirect from 'umi/redirect';
import style from "./style.scss";
import {connect} from "dva";

import Register from './Register';
import Login from './Login';

const namespace = 'loginCtrl';

const mapStateToProps = (state) => {
    const allState = state[namespace];
    return {
        loginStatus: allState.loginStatus,
        login:{
            ...allState.loginData
        },

        registerStatus: allState.registerStatus,
        register:{
            ...allState.registerData
        }
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginHandleSubmit:(payload)=>{
            dispatch({
                type:`${namespace}/queryLoginStatus`,
                payload
            })
        },
        loginHandleChange:(evt)=>{
            let {name,value} = evt.target;
            if(name === 'rememberme'){
                value = evt.target.checked;
            }
            dispatch({
                type:`${namespace}/changeLogin`,
                payload:{
                    name,
                    value
                }
            })
        },
        registerHandleToggle:()=>{
            dispatch({
                type:`${namespace}/toggleRegister`
            })
        },
        registerHandleChange: (evt)=>{
            let payload = {
                name: evt.target.name,
                value: evt.target.value
            };

            dispatch({
                type:`${namespace}/changeRegister`,
                payload
            });

            dispatch({
                type: `${namespace}/validateRegister`,
                payload
            });

            dispatch({
                type: `${namespace}/canSubmitRegister`
            })
        },
        
        registerHandleSubmit: (registerData) => {
            dispatch({
                type:`${namespace}/insertNewAccount`,
                payload:{
                    username:registerData.username,
                    password:registerData.password
                }
            })
        },

        responseHandleError:()=>{
            dispatch({
                type:`${namespace}/responseError`,

            })
        }
    }
};

const Response = (props) => {
    if(props.loginStatus === 'Success'){
        // props.history.push('/EMS/homepage');
        return <Redirect to={{pathname:'/EMS/homepage',state:{text:"Logged In"}}} push />;
    }else if(props.registerStatus === 'Success'){
        return <Redirect to={{pathname:'/EMS/homepage',state:{text:"New User Registered"}}} push />;
    }else{
        return null;
    }
};

const LoginPage = (props)=>(
    <Fragment>
        <Login {...props}/>
        <Response {...props}/>
        <video className={style.bgstyle} autoPlay muted loop>
            <source src="/resources/EMS/videos/Disk.mp4"></source>
        </video>
        <Register {...props}/>
    </Fragment>
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);