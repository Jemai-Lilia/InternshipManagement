const express = require('express');
require ('dotenv').config();
const mysql = require('mysql2');
const { connectDB, sequelize } = require('./config/database');

const app = express();

// Middleware pour parser le JSON
app.use(express.json())

//Connect DB
connectDB();

// Synchronisation des modèles
sequelize.sync({ alter: true })  
  .then(() => console.log('Tables synchronisées'))
  .catch(err => console.error('Erreur de synchronisation:', err));


//Create server
app.listen(process.env.PORT, ()=>{
    console.log(`Server runing on port ${process.env.PORT}`);
})