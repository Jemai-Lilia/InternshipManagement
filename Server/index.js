const express = require('express');
require ('dotenv').config();
const mysql = require('mysql2');

const app = express();


//Create server
app.listen(process.env.PORT, ()=>{
    console.log(`Server runing on port ${process.env.PORT}`);
})