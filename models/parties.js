module.exports = function(sequelize, DataTypes) {
  var Parties = sequelize.define("Parties", {
    user_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    dish_num: DataTypes.INTEGER,
    text: DataTypes.STRING,
    attentees_allergies: DataTypes.STRING,
    dietar_needs: DataTypes.STRING,
    age_greater_21: DataTypes.BOOLEAN,
    alcohol_type: DataTypes.STRING,
    num_drinks: DataTypes.INTEGER,
    activites: DataTypes.BOOLEAN
  });
  return Parties;
};
