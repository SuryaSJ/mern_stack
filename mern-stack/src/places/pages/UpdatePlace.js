import React from 'react'
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button/Button';
import { useParams } from 'react-router-dom';
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
    const identifiedPlace=DUMMY_PLACES.find(place=>place.id===placeId);

    if(!identifiedPlace){
        return (
            <div className="center">
                <h2>Could not fina a place!</h2>
            </div>
        )
    };
    
    return (
        <form className="place-form">
          <Input element="input" value={identifiedPlace.title} id="title" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} errorText={'Please type in input'} valid={true} onInput={()=>{}} />
          <Input element="textarea" value={identifiedPlace.description} id="description" type="text" label="Description" validators={[ VALIDATOR_MINLENGTH(3)]} errorText={'Please type in atleast {3} characters'} valid={true} onInput={()=>{}}/>
          <Button type="submit"  disabled={true}>SAVE PLACE</Button>  
        </form>
    )
}

export default UpdatePlace;
