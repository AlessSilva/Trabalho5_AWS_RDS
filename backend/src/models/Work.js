const { Model, DataTypes } = require("sequelize");

class Work extends Model {
    static init(sequelize){
        super.init({

            title: DataTypes.STRING,
            description: DataTypes.STRING,
            deadline: DataTypes.DATE

        }, { sequelize });
    }

    static associate( models ){
        this.belongsTo( models.User, { foreignKey: "user_id", as : "user" } );
    }
}

module.exports = Work;