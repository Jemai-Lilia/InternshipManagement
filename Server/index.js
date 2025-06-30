const express = require('express');
require ('dotenv').config();
const mysql = require('mysql2');
const { connectDB } = require('./config/database');

const app = express();

//Connect DB
connectDB();

//Create server
app.listen(process.env.PORT, ()=>{
    console.log(`Server runing on port ${process.env.PORT}`);
})