import produce from 'immer';
import request from '../utils/ajax';
import qs from 'querystring';
// import {push} from 'react-router-redux';

const loginUrl = 'http://localhost:8080/EMS/login';
const api_header = {"Accept": "application/json","Content-Type":"application/x-www-form-urlencoded"};
const registerUrl = 'http://localhost:8080/EMS/register';

export default {
    state:{
        loginStatus:'',
        
        loginData:{
            username:'',
            password:'',
            rememberme:false
        },

        token:'',

        registerStatus:'',

        registerData:{
            modal: false,

            email: '',
            username: '',
            password: '',
            
            isSubmitDisabled: true,

            formErrors:{email:'',username: '',password: ''},
            formIsFirst:{email:true,username: true,password: true},
            formValidity:{email:false,username: false,password:false}
        },
    },

    effects:{
        //Query the LoginStatus(Login Check is Performed by Backend APIs)
        *queryLoginStatus({payload:pld}, {call,put}){
            const {username, password, rememberme} = pld;

            const loginResponse = yield call(request,
                'POST',
                loginUrl,
                {headers:api_header,
                data:qs.stringify({username,password,rememberme})});
            // if(loginStatus.result === 'Success'){
            //     yield put(push('/EMS/homepage')); //An effecient way to deal with redirect with ajax result
            // }else{
                yield put({type:'changeLoginStatus', payload:loginResponse.data.result});
                if(loginResponse.headers.hasOwnProperty('X-Authorization')){
                    yield put({type:'changeToken', payload:loginResponse.headers['X-Authorization']})
                }
            // }
        },

        *insertNewAccount({payload:pld},{call,put}){
            const {email,username,password} = pld;
            const registerResponse = yield call(request,
                'POST',
                registerUrl,
                {headers:api_header,
                data:qs.stringify({email,username,password})});

            yield put({type:'changeRegisterStatus', payload:registerResponse});
        }
    },

    reducers:{
        //Change the loginStatus state so that React can change the router accordingly
        changeLoginStatus(state,{payload:pld}){
            return produce(state,(draft)=>{
                switch(pld){
                    case 'success':
                        draft.loginStatus = pld;
                        break;
                    case 'no such user':
                        draft.loginStatus = 'User Has Not Been Registered';
                        break;
                    case 'bad credentials':
                        draft.loginStatus = 'The Password is Wrong. Please Check Your Input.';
                        break;
                    case 'internal error':
                        draft.loginStatus = 'Username or Password May Be Wrong';
                        break;
                    default:
                        draft.loginStatus = 'Unknown Error';
                }
                return draft;
            })
        },

        changeLogin(state,{payload:pld}){
            return produce(state, (draft)=>{
                if(state.loginStatus !== ''){
                    draft.loginStatus = '';
                }
                draft.loginData[pld.name] = pld.value;
                return draft;
            })
        },

        changeToken(state,{payload:pld}){
            return produce(state, (draft)=>{
                draft.token = pld;
                return draft;
            })
        },

        //Reducers for The Registration Module
        toggleRegister(state){
            return produce(state, (draft)=>{
                draft.registerData = {
                    modal: ! draft.registerData.modal,

                    email: '',
                    username: '',
                    password: '',
                    
                    isSubmitDisabled: true,
                    formErrors:{email:'',username: '',password: ''},
                    formIsFirst:{email:true,username: true,password: true},
                    formValidity:{email:false,username: false,password:false}
                }
                draft.registerStatus = '';
                return draft;
            })
        },

        changeRegister(state,{payload:pld}){
            return produce(state,(draft)=>{
                draft.registerData[pld.name] = pld.value;
                if(draft.registerData.formIsFirst[pld.name]){
                    draft.registerData.formIsFirst[pld.name] = false;
                }
                return draft;
            })
        },

        //Peform Validation on the Input
        validateRegister(state, {payload:pld}){
            const {name, value} = pld;

            let fieldValidationErrors = state.registerData.formErrors;
            let validity = state.registerData.formValidity;

            const emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            const isEmail = name === 'email';
            const isPassword = name === 'password';

            if(isEmail){
                if(value.length >0){
                    if(emailTest.test(value.toLowerCase())){
                        validity[name]=true;
                    }else{
                        validity[name] = false;
                        fieldValidationErrors[name] = 'Email format is invalid';
                    }
                }else{
                    validity[name] = false;
                    fieldValidationErrors[name] = 'Email is required and cannot be empty';            
                }
            }else if(isPassword){
                if(value.length>7){
                    validity[name]=true;
                }else if(value.length>0){
                    validity[name]=false;
                    fieldValidationErrors[name] = 'Password should be at least 8 characters';
                }else{
                    validity[name]=false;
                    fieldValidationErrors[name] = 'Password is required and cannot be empty';
                }
            }else{
                if(value.length>0){
                    validity[name]=true;
                }else{
                    validity[name]=false;
                    fieldValidationErrors[name] = 'Username is required and cannot be empty';
                }
            }
            
            return produce(state,(draft)=>{
                draft.registerData.formErrors = fieldValidationErrors;
                draft.registerData.formValidity = validity;
                return draft;
            });
        },

        // Change the Status of the Submit Button
        canSubmitRegister(state){
            const {email,username,password} = state.registerData.formValidity;
            return produce(state,draft=>{
                if(email && username && password){
                    draft.registerData.isSubmitDisabled = false;
                }else{
                    draft.registerData.isSubmitDisabled = true;
                }
                return draft;
            })
        },

        changeRegisterStatus(state,{payload:response}){
            const {data, headers} = response;
            const {result, email, username, password} = data;
            return produce(state,(draft)=>{
                draft.registerStatus = result;
                if(result === 'error'){
                    draft.registerData.formErrors = {email,username,password}
                }else if(headers.hasOwnProperty('X-Authorization')){
                    draft.token = headers['X-Authorization'];
                }
                return draft;
            });
        },
    }
}