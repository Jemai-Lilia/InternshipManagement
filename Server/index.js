const express = require('express');
require ('dotenv').config();
const path = require('path');
const { connectDB} = require('./config/database');
const { sequelize } = require('./models');
const app = express();

const offreRoute = require('./routes/OffreRoute');
// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

// Middleware pour parser le JSON
app.use(express.json())


app.use('/offres', offreRoute);

//Connect DB
connectDB();

// Synchronisation des modèles
sequelize.sync({ alter: true })  
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