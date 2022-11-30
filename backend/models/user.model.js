module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        admin: {
            type: Sequelize.INTEGER
        },
        CP: {
            type: Sequelize.STRING
        },
        filename: {
          type: Sequelize.STRING
        }
    }, {});
    User.associate = function(models) {
        User.belongsToMany(models.Restaurant, {
            through: 'Valoration',
            as: 'ValoratedRestaurants',
            foreignKey: 'UserId',
        })
    }
    return User;
}