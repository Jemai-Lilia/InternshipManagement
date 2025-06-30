module.exports=(sequelize,DataType)=>{
    const Candidatures=sequelize.define("Candidatures",
    {
        candidatureId:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        offreStageId:{
            type:DataType.INTEGER,
            references:{
                model:'OffreStages',
                key:'offreStageId'
            }
        },
        stagiaireId:{
             type:DataType.INTEGER,
            references:{
                model:'Users',
                key:'userId'
            }
        },
        specialite:{
            type:DataType.STRING,
            allowNull:false,
        },
        cv:{
            type:DataType.STRING,
            allowNull:false,
        },
        lettreMotivation:{
            type:DataType.STRING,
            allowNull:false,
        },
        dateEntretien:{
            type:DataType.DATE
        },
        status:{
            type:DataType.ENUM('En Attente','Accepté','Refusé','Entretien'),
            allowNull:false,
            defaultValue:'En Attente'
        },
        candid
    },
    {
        timestamps: true,
        indexes: [
            {
                unique: true,
                fields: ['offreStageId', 'stagiaireId']
            }
        ]
    });

    return Candidatures;
};