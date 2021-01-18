const express=require('express');
const { check} =require('express-validator');
const router=express.Router();
const { getPlacesById, getPlacesByUserId, createPlace, updatePlace,deletePlace} =require('../controllers/places-controllers');

router.get('/user/:uid',getPlacesByUserId);
router.get('/:pid',getPlacesById);
router.post('/',[check('title').not().isEmpty(), check('description').isLength({min:5}), check('address').notEmpty()],createPlace);
router.patch('/:pid',[check('title').not().isEmpty(), check('description').isLength({min:5})],updatePlace);
router.delete('/:pid',deletePlace);


module.exports=router;