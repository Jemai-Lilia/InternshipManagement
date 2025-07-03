module.exports=(sequelize,DataType)=>{
    const Candidature=sequelize.define("Candidature",
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

    /*----Association-----*/
    Candidature.associate=(models)=>{
        Candidature.belongsTo(models.User,{
            foreignKey:'stagiaireId',
            onDelete:'cascade'
        });
        Candidature.belongsTo(models.OffreStage,{
            foreignKey:'offreStageId',
            onDelete:'cascade'
        })
    }

    return Candidature;
};