module.exports=(sequelize,Datatype)=>{
    const Users=sequelize.define("Users",
    {
        userId:{
            type:Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname:{
            type:Datatype.STRING,
            allowNull:false
        },
        lastname:{
            type:Datatype.STRING,
            allowNull:false
        },
        cin:{
            type:Datatype.INTEGER,
            allowNull:false,
            unique:true
        },
        email:{
            type:Datatype.STRING,
            allowNull:false,
            unique:true,
            validate:{
                isEmail:true
            }
        },
        password:{
            type:Datatype.STRING,
            allowNull:false
        },
        phone:{
            type:Datatype.STRING
        },
        role:{
            type:Datatype.ENUM('RH','Encadrant','Stagiaire'),
            allowNull:false,
            defaultValue:'Stagiaire'
        }
    },
    {
        timestamps:true,
        createdAt:'createdAt',
        updatedAt:false

    });
        


    return Users;
};