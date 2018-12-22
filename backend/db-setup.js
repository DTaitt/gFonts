const Sequelize = require('sequelize');

const sequelize = new Sequelize('gfonts', 'donovan', 'password', {
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

const Font = sequelize.define('font', {
    category: Sequelize.STRING,
    family: Sequelize.STRING,
    url: Sequelize.STRING,
    variants: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    }
})

const main = async () => {
    await sequelize.sync({force: true});
    process.exit();
}
  
main();