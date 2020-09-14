import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { useForm } from '../../shared/custom-hooks/form-hooks';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button/Button';
import Card from '../../shared/components/UI/Card';
import './PlaceForm.css';
const UpdatePlace = (props) => {
    const DUMMY_PLACES=[
        {
            id:'p1',
            title:'Empire State Building',
            description:'One of the most sky scrapers in the world',
            image:'https://cropper.watch.aetnd.com/public-content-aetn.video.aetnd.com/video-thumbnails/AETN-History_VMS/21/202/tdih-may01-HD.jpg?w=1440',
            address:'20 W 34th St, New York, NY 10001, United States',
            location:{
                lat:'40.7484405',
                lng:'-73.9878531'
            },
            creatorId:'u1'
        },
        {
            id:'p2',
            title:'Empire State Building',
            description:'One of the most sky scrapers in the world',
            image:'https://cropper.watch.aetnd.com/public-content-aetn.video.aetnd.com/video-thumbnails/AETN-History_VMS/21/202/tdih-may01-HD.jpg?w=1440',
            address:'20 W 34th St, New York, NY 10001, United States',
            location:{
                lat:'40.7484405',
                lng:'-73.9878531'
            },
            creatorId:'u2'
        }
    ]

    const {placeId} =useParams();
    const [isLoading,setIsLoading] = useState(true);

    const [formstate, inputChangeHandler,setFormData]=  useForm({
        title:{
            value:'',
            isValid:false
        },
        description:{
            value:'',
            isValid:false
        },
        
    },false)

    const identifiedPlace=DUMMY_PLACES.find(place=>place.id===placeId);
    useEffect(() => {
        setFormData({
            title:{
                value:identifiedPlace.title,
                isValid:true
            },
            description:{
                value:identifiedPlace.description,
                isValid:true
            },
        },true);
        setIsLoading(false);
       
    }, [setFormData,identifiedPlace.title,identifiedPlace.description]);
//TODO: check why only adding identifiedPlace leads to infiniteloop
    if(!identifiedPlace){
        return (
            <div className="center">
                <h2>Could not fina a place!</h2>
            </div>
        )
    };
    if(isLoading){
        return (
            <div className="center">
                <Card>
                <h2>Loading....</h2>
                </Card>
            </div>
        )
    };
   const submitHandler=(e)=>{
       e.preventDefault();
        console.log(formstate);
    }
    return (
        <form className="place-form" onSubmit={submitHandler}>
          <Input element="input" initialValue={formstate.inputs.title.value} id="title" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} errorText={'Please type in input'} initialValidity={formstate.inputs.title.isValid} onInput={inputChangeHandler} />
          <Input element="textarea" initialValue={formstate.inputs.description.value} id="description" type="text" label="Description" validators={[ VALIDATOR_MINLENGTH(3)]} errorText={'Please type in atleast {3} characters'} initialValidity={formstate.inputs.description.isValid} onInput={inputChangeHandler}/>
          <Button type="submit"  disabled={!formstate.isValid}>SAVE PLACE</Button>  
        </form>
    )
}

export default UpdatePlace;
