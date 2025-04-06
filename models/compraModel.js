const { DataTypes } = require('sequelize');
const { sequelize } = require('.');


module.exports = (sequelize)=>
    sequelize.define('Compra',{
            quantidade: DataTypes.INTEGER,
            data: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW
            }
        }
    );