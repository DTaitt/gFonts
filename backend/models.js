const Sequelize = require('sequelize');
const sequelize = require('./db-setup')

const Font = sequelize.define('font', {
    category: Sequelize.STRING,
    family: Sequelize.STRING,
    url: Sequelize.STRING,
    variants: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    }
})

module.exports = { Font }