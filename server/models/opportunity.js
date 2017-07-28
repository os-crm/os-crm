module.exports = (sequelize, DataTypes) => {
  var Opportunity = sequelize.define('Opportunity', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        Opportunity.belongsTo(models.Account, {
          foreignKey: 'accountId',
          onDelete: 'CASCADE',
        });
      },
    },
  });
  return Opportunity;
};