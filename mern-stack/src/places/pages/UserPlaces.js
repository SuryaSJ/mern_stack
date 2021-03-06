import React from 'react'
import PlaceList from '../components/PlaceList/PlaceList';
import { useParams } from 'react-router-dom';

const UserPlaces = () => {
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

    const {userId} =useParams();
    const loadedPlaces=DUMMY_PLACES.filter(place=>place.creatorId===userId);
    return (
       <PlaceList items={loadedPlaces}/>
    )
}

export default UserPlaces;
