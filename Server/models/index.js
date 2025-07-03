const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// Importation des modèles
const User = require('./User')(sequelize, DataTypes);
const OffreStage = require('./OffreStage')(sequelize, DataTypes);
const Candidature = require('./Candidature')(sequelize, DataTypes);
const DossierStage = require('./DossierStage')(sequelize,DataTypes);
const Evaluation = require('./Evaluation')(sequelize,DataTypes);
const Notification= require('./Notification')(sequelize,DataTypes);

module.exports = {
    sequelize,
    User,
    OffreStage,
    Candidature,
    DossierStage,
    Evaluation,
    Notification
};