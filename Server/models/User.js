module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cin: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING
        },
        role: {
            type: DataTypes.ENUM('RH', 'Encadrant', 'Stagiaire'),
            allowNull: false,
            defaultValue: 'Stagiaire'
        }
    },
    {
        timestamps: true,
        updatedAt: false 
    });

    /* ----Association---- */
    
    User.associate=models=>{
        //Un stagiaire peut postuler à plusieurs offres
        User.hasMany(models.Candidature,{
            foreignKey:'stagiaireId',
            onDelete:"cascade"
        })
        //Un Rh peut créer plusieurs offres
        User.hasMany(models.OffreStage,{
            foreignKey:'rhId',
            onDelete:"cascade"
        })
        //	Un stagiaire peut avoir plusieurs dossiers (un par stage accepté)
        User.hasMany(models.DossierStage,{
            foreignKey:'stagiaireId',
            onDelete:"cascade"
        })
        //Un encadrant ou stagiaire est concerné par plusieurs évaluations
        User.hasMany(models.Evaluation,{
            foreignKey:'encadrantId',
            onDelete:"cascade"
        })
        //Chaque utilisateur peut recevoir plusieurs notifications
        User.hasMany(models.Notification,{
            foreignKey:'userId',
            onDelete:"cascade"
        })
    };



    return User;
};
