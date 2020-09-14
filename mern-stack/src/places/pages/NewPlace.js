import React, { useCallback, useReducer } from 'react'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button/Button';
import './PlaceForm.css';

const formReducer=(state,action)=>{

    switch(action.type){

        case 'INPUT_CHANGE':
            let isFormValid=true;
            for(const inputId in state.inputs){
                if(inputId===action.inputId){
                    isFormValid=isFormValid && action.isValid;
                }else {
                    isFormValid=isFormValid && state.inputs[action.inputId].isValid;
                }
            }
            
            return {
                ...state,
                inputs:{
                    ...state.inputs,
                    [action.inputId]:{
                        value: action.value,
                        isValid:action.isValid
                    }
                },
                isValid:isFormValid
            }

        default:
            return state;
    }
}
const NewPlace = () => {
    const initialState ={
        inputs:{
            title:{
                value:'',
                isValid:false
            },
            description:{
                value:'',
                isValid:false
            },
            address:{
                value:'',
                isValid:false
            }
        },
        isValid:false
    }
    const [formstate, dispatch] =useReducer(formReducer, initialState);
    const inputChangeHandler=useCallback((id,value,isValid)=>{ dispatch({type: 'INPUT_CHANGE',value:value,inputId:id, isValid:isValid})},[]);
    const submitHandler =(event)=>{
        event.preventDefault();
        console.log("Form state",formstate.inputs);
    }
    return (
        <form className="place-form" onSubmit={submitHandler}>
          <Input element="input" id="title" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} errorText={'Please type in input'} onInput={inputChangeHandler}/>
          <Input element="textarea" id="description" type="text" label="Description" validators={[ VALIDATOR_MINLENGTH(3)]} errorText={'Please type in atleast {3} characters'} onInput={inputChangeHandler}/>
          <Input element="input" id="address" type="text" label="Address" validators={[VALIDATOR_REQUIRE()]} errorText={'Please type in address'} onInput={inputChangeHandler}/>
          <Button type="submit"  disabled={!formstate.isValid}>ADD PLACE</Button>
        </form>
    )
}

export default NewPlace;
