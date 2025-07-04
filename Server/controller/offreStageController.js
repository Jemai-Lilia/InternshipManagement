const { OffreStage } = require('../models'); 
const User = require('../models/User');
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

// Modifier offre de stage
exports.updateOfrreStage=async(req,res)=>{
   try{
    const offre=await OffreStage.findByPk(req.params.id);
    if(!offre) return res.status(404).json({
        message:"offre de stage non trouvé"
    });
    await offre.update(req.body);
    res.status(200).json({
      message: "✅ Offre mise à jour avec succès",
      data: offre
    });

   }catch(error){
    res.status(500).json({
        message:'Erreur mise a jour'
    })
   };
}

// Delete offre de stage
exports.deleteOffreStage=async(req,res)=>{
    try{
        const offre=await OffreStage.findByPk(req.params.id);
        if(!offre) return res.status(404).json({
        message:"offre de stage non trouvé"
        });
        await offre.destroy();
        res.status(200).json({
            message: "Offre supprimer avec succès",
        });

    }catch(error){
        res.status(500).json({
        message:'Erreur de suppression'
        })
    }
}

// Get offre de stage By id
exports.getOffreById=async(req,res)=>{
    try{
        const offre=await OffreStage.findByPk(req.params.id);
        if(!offre) return res.status(404).json({
        message:"offre de stage non trouvé"
        });
        res.status(200).json({
            message: "Offre trouvés",
            data: offre
        });
    }catch(error){
        res.status(500).json({
        message:'Erreur serveur lors de la recherche'
        })

    }
}

// Get all Offre de stage
exports.getAllOffre=async(req,res)=>{
    try{
        const offre = await OffreStage.findAll({
            order:[['createdAt','DESC']]
        });
        res.status(200).json({
            message:"Liste des offres récupérée avec sucées",
            data: offre
        });
    }catch(error){
        console.error("Erreur lors de la récupération des offres de stage : ", error);
        res.status(500).json({
        message:'Erreur serveur lors de la récupération des offres'
        })
        
    }
}