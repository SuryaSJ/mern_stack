import React from 'react'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button/Button';
import './PlaceForm.css';
import { useForm} from '../../shared/custom-hooks/form-hooks';

const NewPlace = () => {
   
  const [formstate, inputChangeHandler]=  useForm({
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
    },false)
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
