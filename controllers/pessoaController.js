const { Pessoa } = require('../models');


exports.createPessoa = async (req, res) => {
  try {
    const { nome, email } = req.body;

    if (!req.body || !nome || !email) {
      return res.status(400).send({
        message: "Nome e email são obrigatórios."
      });
    }

    const novaPessoa = await Pessoa.create({ nome, email });
    res.status(201).json(novaPessoa);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Erro ao criar pessoa."
    });
  }
};


exports.getPessoas = async (req, res) => {
  try {
    const pessoas = await Pessoa.findAll();
    res.json(pessoas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getPessoaById = async (req, res) => {
  try {
    const { id } = req.params;
    const pessoa = await Pessoa.findByPk(id);

    if (!pessoa) {
      return res.status(404).json({
        message: `Pessoa com id ${id} não encontrada.`
      });
    }

    res.json(pessoa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.updatePessoa = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email } = req.body;

    const pessoa = await Pessoa.findByPk(id);
    if (!pessoa) {
      return res.status(404).json({
        message: `Pessoa com id ${id} não encontrada.`
      });
    }

    await pessoa.update({ nome, email });
    res.json(pessoa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.deletePessoa = async (req, res) => {
  try {
    const { id } = req.params;
    const pessoa = await Pessoa.findByPk(id);

    if (!pessoa) {
      return res.status(404).json({
        message: `Pessoa com id ${id} não encontrada.`
      });
    }

    await pessoa.destroy();
    res.json({ message: `Pessoa com id ${id} foi removida.` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
