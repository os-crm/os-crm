module.exports = (sequelize, DataTypes) => {
  var Lead = sequelize.define('Lead', {
    source: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return Lead;
};