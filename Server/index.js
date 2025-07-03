const express = require('express');
require ('dotenv').config();
const { connectDB} = require('./config/database');
const { sequelize } = require('./models');
const app = express();

// Middleware pour parser le JSON
app.use(express.json())

//Connect DB
connectDB();

// Synchronisation des modèles
sequelize.sync({ force: true })  
  .then(() => console.log('Tables synchronisées'))
  .catch(err => console.error('Erreur de synchronisation:', err));

// Test route
app.get('/', (req, res) => {
  res.send('🚀 Serveur Internship Management fonctionne !');
});

//Create server
app.listen(process.env.PORT, ()=>{
    console.log(`Server runing on port ${process.env.PORT}`);
})