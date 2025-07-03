module.exports=(sequelize,DataType)=>{
    const Evaluation=sequelize.define("Evaluation",
    {
        evaluationId:{
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dossierStageId:{
            type:DataType.INTEGER,
            allowNull:false
        },
        encadrantId: {  
            type: DataType.INTEGER,
            allowNull: false
        },
        noteTechnique:{
            type:DataType.DECIMAL
        },
        noteComportement:{
            type:DataType.DECIMAL,
            validate:{
                min : 0,
                max : 20
            }
        },
        commentaire:{
            type:DataType.TEXT,
        }

    },
    {
        timestamps: true
    });

    /*---Association---- */
    Evaluation.associate = models => {
    Evaluation.belongsTo(models.User, {
      foreignKey: 'encadrantId'
    });

    Evaluation.belongsTo(models.DossierStage, {
      foreignKey: 'dossierStageId'
    });
  };


    return Evaluation;
};