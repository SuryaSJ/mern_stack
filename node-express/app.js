const express =require('express');
const bodyParser=require('body-parser');
const placeRoutes=require('./routes/places-routes');
const userRoutes=require('./routes/users-routes');
const HttpError = require('./models/http-error');
const app=express();
const cors = require('cors')
app.use(cors());
app.use(bodyParser.json());

app.use('/api/places',placeRoutes);

app.use('/api/users',userRoutes);


app.use((req,res,next)=>{

    throw new HttpError('Could not find this route.',404);
});
app.use((error,req,res,next)=>{

    if(res.headerSent){
       return next(error);
    }

    res.status(error.code||500);
    res.json({message:error.message||'An unknown error occurred.'});

})
app.listen(5000);