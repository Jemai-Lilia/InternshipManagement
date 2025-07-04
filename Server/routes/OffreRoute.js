const express = require('express');
const router = express.Router();
const offreController = require('../controller/offreStageController');

router.post('/addOffre', offreController.addOffreStage);

module.exports = router;
