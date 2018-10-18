'use strict';
//import express from 'express';

const express = require('express') ; 

const app = express();  

const listeningPort = 1234;


//Defining the middleware, making decisions before sending back the response 
app.use('/test:number',(req, res, next)=>{

    console.log(`Request ${ req }`);
    console.log(`Request ${ res }`);
    next();
});


//Defining what happens when a request is made

app.get('/test:number', (req, res)=>{
    console.log(`Hello Request #${ req.params.number}`);
    res.send("Hello Dost!");
});

app.listen(listeningPort, ()=>{
    console.log(`Server listening on : ${listeningPort}`);
    
});

