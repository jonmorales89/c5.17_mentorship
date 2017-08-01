module.exports = (sequelize, DataTypes) => {
  let Ingredient = sequelize.define("ingredients", {
    ingredient: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [2, 30]
    },
    foodType: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [2,30]
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    daysTilExpiration: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Ingredient
};