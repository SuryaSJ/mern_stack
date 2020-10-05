const express=require('express');
const router=express.Router();
const { getPlacesById, getPlacesByUserId, createPlace, updatePlace,deletePlace} =require('../controllers/places-controllers');

router.get('/user/:uid',getPlacesByUserId);
router.get('/:pid',getPlacesById);
router.post('/',createPlace);
router.patch('/:pid',updatePlace);
router.delete('/:pid',deletePlace);


module.exports=router;