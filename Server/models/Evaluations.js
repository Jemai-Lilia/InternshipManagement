module.exports=(sequelize,DataType)=>{
    const Evaluations=sequelize.define("Evaluations",
    {
        evaluationId:{
            type:DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dossierStageId:{
            type:DataType.INTEGER,
            references:{
                model:'DossierStages',
                key:'dossierStageId'
            }
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

    return Evaluations;
};