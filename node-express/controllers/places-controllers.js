
const HttpError=require('../models/http-error');
const { validationResult} =require('express-validator');
const { v4: uuidv4 } = require('uuid');
let DUMMY_PLACES=[
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
    }];

const getPlacesByUserId =(req,res,next)=>{

    const userId=req.params.uid;
    const places=DUMMY_PLACES.filter(p=>p.creatorId===userId);
    if(!places || places.length===0){
        throw new HttpError('Could not find place for the provided user id.',404);
    }
    res.json({places});
};

const getPlacesById =(req,res,next)=>{

    const placeId=req.params.pid;
    const place=DUMMY_PLACES.find(p=>p.id===placeId);
    if(!place){
       return next(new HttpError('Could not find place for the provided id.',404));
    }
    res.json({place});
}

const createPlace=(req,res,next)=>{

    const { title, description, coordinates, address, creatorId} = req.body;

    const result=validationResult(req);
    if(!result.isEmpty()){
        throw new HttpError('Could not create place, invalid inputs.',422);
    }
    const newPlace={
        id:uuidv4(),
        title,
        description,
        location:coordinates,
        address,
        creatorId
    }

    DUMMY_PLACES.push(newPlace);

    res.status(201).json({place:newPlace});
}

const updatePlace=(req,res,next)=>{

    const { title, description} = req.body;
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        throw new HttpError('Could not update place, invalid inputs.',422);
    }
    const placeID=req.params.pid;

    const updatedPlace={...DUMMY_PLACES.find(p=>p.id===placeID)};
    const placeIndex=DUMMY_PLACES.findIndex(p=>p.id===placeID);
  
    updatedPlace.title=title;
    updatedPlace.description=description;
    
    DUMMY_PLACES[placeIndex]=updatedPlace;
    
    res.status(200).json({place:updatedPlace});
}

const deletePlace=(req,res,next)=>{

    
    const placeID=req.params.pid;
    if(!DUMMY_PLACES.find(p=>p.id===placeID)){
        throw new HttpError('Could not find place.',404); 
    }
    DUMMY_PLACES=DUMMY_PLACES.filter(p=>p.id!==placeID);

    res.status(200).json({message:'Deleted the place'});
}
exports.getPlacesById=getPlacesById;
exports.getPlacesByUserId=getPlacesByUserId;
exports.createPlace=createPlace;
exports.updatePlace=updatePlace;
exports.deletePlace=deletePlace;