const res = require("express/lib/response");
const convite = require("../models/Convite");
const orderById = { order: [["id", "ASC"]] };
let mensagem = "";
let type = "";

const Op = require("sequelize").Op;

const getAll = async (req, res) => {
  try {
    setTimeout(() => {
      mensagem = "";
      type = "";
    }, 1000);

    const convites = await convite.findAll(orderById);
    res.render("index", {
      convites,
      convitePut: null,
      conviteDel: null,
      mensagem,
      type,
     
    });
  } catch (err) {
    res.status(500).send({ err: err.mensagem });
  }
};

const cadastro = (req, res) => {
  try {
    res.render("cadastro", { mensagem, type });
  } catch (err) {
    res.status(500).send({ err: err.mensagem });
  }
};

// cadastrar
const create = async (req, res) => {
  try {
    const convitebody = req.body;

    if (!convitebody) {
      mensagem = "Preencha todos os Campos para cadastrar!";
      type = "Alerta";
      return res.redirect("/cadastro");
    }

    // cria convite
    await convite.create(convitebody);
    mensagem = "Convite iserido com sucesso!";
    type = "sucesso";

    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.mensagem });
  }
};

// editar
const getById = async (req, res) => {
  try {
    const method = req.params.method;
    const convites = await convite.findAll(orderById);
    const conviteresposta = await convite.findByPk(req.params.id);

    if (method == "Put") {
      res.render("index", {
        convites,
        convitePut: conviteresposta,
        conviteDel: null,
        mensagem,
        type,
        
      });
    } else {
      res.render("index", {
        convites,
        convitePut: null,
        conviteDel: conviteresposta,
        mensagem,
        type,
      
      });
    }
  } catch (err) {
    res.status(500).send({ err: err.mensagem });
  }
};

// editar
const update = async (req, res) => {
  const convitebody = req.body;

  await convite.update(convitebody, { where: { id: req.params.id } });
  mensagem = "Convite Atualizado com sucesso!";
  type = "sucesso";
  res.redirect("/");
};
// remover convite
const deletar = async (req, res) => {
  try {
    await convite.destroy({ where: { id: req.params.id } });
    mensagem = "Convite Removido com sucesso!";
    type = "sucesso";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.mensagem });
  }
};

const pequisaByName = async (req, res) => {
  try {
    const teste = await convite.findAll({
      where: {
        nome: {
          [Op.like]: `%${req.body.convite}%`,
        },
      },
    });
   
    if (teste.length == 0){
      mensagem = "Não encontramos o Convite"
      type = "info"
      return res.redirect("/")
    }
  // ate aqui ok
 
  console.log(teste)
  } catch (err) {
    res.status(500).send({ err: err.mensagem });
  }
};

module.exports = {
  getAll,
  cadastro,
  create,
  getById,
  update,
  deletar,
  pequisaByName,
};
