module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Opportunities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      accountId: {
        type: Sequelize.INTEGER,
      }
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Opportunities'),
};