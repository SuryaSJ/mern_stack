import React, { useState,useContext } from 'react';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button/Button';
import {VALIDATOR_MINLENGTH,VALIDATOR_REQUIRE,VALIDATOR_EMAIL} from '../../shared/util/validators';
import {useForm} from '../../shared/custom-hooks/form-hooks';
import Card from '../../shared/components/UI/Card';
import { AuthContext} from '../../shared/context/AuthContext';
import './Auth.css';


const Auth = () => {
    const auth=useContext(AuthContext);

    const [isLoginMode, setSwitchMode] = useState(true);
    const [formstate, inputChangeHandler,setFormData]=  useForm({
        username:{
            value:'',
            isValid:false
        },
        usermail:{
            value:'',
            isValid:false
        },
        password:{
            value:'',
            isValid:false
        },
    },false)

    const switchModeHandler=()=>{
        if(!isLoginMode){
            setFormData({
                ...formstate.inputs,
                name:undefined
            },formstate.inputs.usermail.isValid && formstate.inputs.password.isValid)
        }else{
            setFormData({
                ...formstate.inputs,
                name:{
                    value:'',
                    isValid:false
                }
            },false)
        }
        setSwitchMode(prevState=>!prevState);
    }

    const submitHandler =(event)=>{
        event.preventDefault();
        auth.login();
        console.log("Form state",formstate.inputs);
    }
    return (
        <Card className="Authentication">
            <h2 className="Authentication__header">Login Required</h2>
            <hr/>
            <form onSubmit={submitHandler}>
            {!isLoginMode && 
            <Input element="input"  id="username" type="text" label="User name" validators={[VALIDATOR_REQUIRE()]} errorText={'Please type in user name'} onInput={inputChangeHandler} /> }
            <Input element="input"  id="usermail" type="text" label="Email id" validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]} errorText={'Please type in vaid email'} onInput={inputChangeHandler} />
            <Input element="input"  id="password" type="password" label="Password" validators={[ VALIDATOR_MINLENGTH(8)]} errorText={'Please type in atleast {8} characters'} onInput={inputChangeHandler}/>
            <Button type="submit"  disabled={!formstate.isValid}>{isLoginMode ? 'Login': 'Signup'}</Button>  
            </form>
            <Button inverse onClick={switchModeHandler} >SWITCH TO{isLoginMode ? 'SIGNUP': 'LOGIN'}</Button>
        </Card>
    )
}

export default Auth;
