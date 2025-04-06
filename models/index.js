const { Sequelize } = require('sequelize');
const PessoaModel = require('./pessoa');
const ProdutoModel = require('./produto');
const CompraModel = require('./compra');
require('dotenv').config();



const sequelize = new sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,

    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
      }
);


const Pessoa = PessoaModel(sequelize);
const Produto = ProdutoModel(sequelize);
const Compra = CompraModel(sequelize);


Pessoa.hasMany(Compra, { foreignKey: 'pessoaId' });
Produto.hasMany(Compra, { foreignKey: 'produtoId' });
Compra.belongsTo(Pessoa, { foreignKey: 'pessoaId' });
Compra.belongsTo(Produto, { foreignKey: 'produtoId' });

module.exports = {
  sequelize,
  Pessoa,
  Produto,
  Compra,
};



