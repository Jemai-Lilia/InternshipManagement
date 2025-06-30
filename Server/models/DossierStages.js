module.exports=(sequelize,DataType)=>{
    const DossierStages=sequelize.define("DossierStages",
    {
        dossierId:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        stagiaireId:{
            type:DataType.INTEGER,
            references:{
                model:'Users',
                key:'userId'
            }
        },
        offreStageId:{
            type:DataType.INTEGER,
            references:{
                model:'OffreStages',
                key:'offreStageId'
            }
        },
        encadrantId:{
            type:DataType.INTEGER,
            references:{
                model:'Users',
                key:'userId'
            }
        },
        dateDebut:{
            type:DataType.DATEONLY,
            allowNull:false
        },
        dateFin:{
            type:DataType.DATEONLY,
            allowNull:false
        },
        status:{
            type:DataType.ENUM('En cours', 'Complété', 'Archivé')
        },
        lettreAffectation:{
            type:DataType.STRING,
            allowNull:false,
        },
        demandeStage:{
            type:DataType.STRING,
            allowNull:false,
        },

    },
    {
         timestamps: true
    });

    return DossierStages;
};