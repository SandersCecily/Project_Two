module.exports = function(sequelize, DataTypes) {
  var Parties = sequelize.define("Parties", {
    user_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    age_greater_21: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
    text: DataTypes.STRING,
    allergy: DataTypes.BOOLEAN,
    allergy_type: DataTypes.STRING
  });
  return Parties;
};
