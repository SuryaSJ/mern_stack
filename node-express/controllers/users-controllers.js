const HttpError=require('../models/http-error');
const { validationResult} =require('express-validator');
const { v4: uuidv4 } = require('uuid');
const DUMMY_USERS=[
    {
        id:"u1",
        name:'Surya',
        email:'test@test.com',
        password:'pwd@1234'
    
    }
]

const getUsers =(req,res,next)=>{

  res.json({users:DUMMY_USERS});
};

const signUp=(req,res,next)=>{

    const { name, email, password} = req.body;
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        throw new HttpError('Could not sign up, invalid inputs.',422);
    }
    const hasUser=DUMMY_USERS.find(u=>u.email ===email);

    if(hasUser){
        throw new HttpError('Could not create user, email already exists',422);
    }
    const newUser={
        id:uuidv4(),
        name,
        email,
        password
    };

    DUMMY_USERS.push(newUser);

    res.status(200).json({user:newUser});
};

const login=(req,res,next)=>{

    const { email,password} =req.body;

    const identifiedUser=DUMMY_USERS.find(u=>u.email ===email);

    if(!identifiedUser || identifiedUser.password!==password){

        throw new HttpError('Could not find user, invalid credentials',404);
    }

    res.json({message:'Logged in!'});
};



exports.getUsers=getUsers;
exports.signUp=signUp;
exports.login=login;