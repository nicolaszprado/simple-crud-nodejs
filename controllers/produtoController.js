const { Produto } = require('../models');

exports.createProduto = async (req, res) =>
{
    try
    {
        if(!req.body || !nome || !valor){
            res.status(400).json({message: error.message})
        }

        const newProduto = await Produto.create({nome, valor});
        res.status(201).json(newProduto);
    } catch (error) {

        res.status(500).json({message: error.message});
        
    }
}

exports.getProdutos = async (req, res) =>
{
    try {
    
        const produtos = await Produto.findAll
        res.status(200);
        return res.json(produtos);
        
    } catch (error) {
        res.status(500).json({
            message: "Nao foi possivel encontrar pessoas"
        })
        
    }
}

exports.getProdutoByID = async (req, res) =>
{
    try {

        const {id} = req.params;
        const produto = findByPk(id);

        if(!produto){
            return res.status(404).json({
                message: "Pessoa nao encontrada"
            })
        }

        return res.json(produto);

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}