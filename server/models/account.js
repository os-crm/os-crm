module.exports = (sequelize, DataTypes) => {
  var Account = sequelize.define('Account', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        Todo.hasMany(models.Opportunity, {
          foreignKey: 'opportunityId',
          as: 'opportunity',
        });
      },
    },
  });
  return Account;
};