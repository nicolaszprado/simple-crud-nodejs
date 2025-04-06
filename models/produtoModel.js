const { DataTypes } = require('sequelize');
const { sequelize } = require('.');

module.exports = (sequelize) => 
    sequelize.define('Produto',{
        nome: DataTypes.STRING,
        valor: DataTypes.FLOAT

    })