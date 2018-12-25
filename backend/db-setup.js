const Sequelize = require('sequelize');

const sequelize = new Sequelize('gfonts', process.env.DB_USER, 'password', {
    host: 'localhost',
    dialect: 'postgres',
    operatorsAliases: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  
});

sequelize.sync({ force: true })

module.exports = sequelize