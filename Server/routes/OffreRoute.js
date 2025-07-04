const express = require('express');
const router = express.Router();
const offreController = require('../controller/offreStageController');

router.post('/addOffre', offreController.addOffreStage);
router.put('/updateOffre/:id', offreController.updateOfrreStage);
router.delete('/deleteOffre/:id', offreController.deleteOffreStage );
router.get('/getOffreById/:id', offreController.getOffreById);
router.get('/getAllOffre', offreController.getAllOffre);
module.exports = router;
