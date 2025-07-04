const { OffreStage } = require('../models'); 
//Create Offre de stage
exports.addOffreStage=async(req,res)=>{
    try{
        const {titre,description, skills, departement, nombrePlace, dateDebut, dateFin}=req.body;

        const offreStage = await OffreStage.create({
            titre,
            description,
            skills,
            departement,
            nombrePlace,
            dateDebut,
            dateFin
        });
        res.status(201).json({
            message:"Votre offre de stage a été créée avec sucès",
            data:OffreStage
        });
    } catch(error){
        console.log('Erreur création offre de stage', error);
        res.status(500).json({
            message:"erreur serveur lors de la création de l\'offre"});
    }
};

