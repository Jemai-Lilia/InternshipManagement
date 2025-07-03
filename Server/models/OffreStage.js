module.exports=(sequelize,DataType)=>{
    const OffreStage=sequelize.define("OffreStage",
    {
        offreStageId:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        titre:{
            type:DataType.STRING,
            allowNull:false
        },
        description:{
            type:DataType.TEXT,
            allowNull:false
        },
        skills:{
            type:DataType.JSON,
            allowNull:false,
            defaultValue:[]
        },
        departement:{
            type:DataType.STRING,
            allowNull:false
        },
        nombrePlace:{
            type:DataType.INTEGER,
            allowNull:false
        },
        dateDebut:{
            type:DataType.DATEONLY,
            allowNull:false
        },
        dateFin:{
            type:DataType.DATEONLY,
            allowNull:false
        },
        encadrantId:{
            type:DataType.INTEGER,
            references:{
                model:'Users',
                key:'userId'
            }
        }
    },
    {
        timestamps: true
    });

    /* ----Association---- */
    OffreStage.associate=models=>{
        OffreStage.belongsTo(models.User,{
            foreignKey:'encadrantId',
            onDelete:"cascade"
        });
        OffreStage.hasMany(models.Candidature,{
            foreignKey:'offreStageId',
            onDelete:"cascade"
        });
        OffreStage.hasMany(models.DossierStage,{
            foreignKey:'offreStageId',
            onDelete:"cascade"
        });


    };

    return OffreStage;
};