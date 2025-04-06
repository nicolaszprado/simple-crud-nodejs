const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define('Pessoa', {
    nome: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true }
  });