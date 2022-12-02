module.exports = (sequelize, Sequelize) => {
  const Restaurant = sequelize.define("restaurant", {
    name: {
      type: Sequelize.STRING
    },
    direction: {
      type: Sequelize.STRING
    },
    CP: {
      type: Sequelize.INTEGER
    },
    category: {
      type: Sequelize.STRING
    },
    likes: {
      type: Sequelize.INTEGER
    },
    dislikes: {
      type: Sequelize.INTEGER
    },
    filename: {
      type: Sequelize.STRING
    }
  }, {});
  // Restaurant.associate = function (models) {
  //   Restaurant.belongToMany(models.User, {
  //     through: 'Valoration',
  //     as: 'users',
  //     foreignKey: 'RestaurantId',
  //   })
  // }

  return Restaurant;
}