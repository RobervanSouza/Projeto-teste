const routes = require("express").Router();

const ConviteContollers = require("../controllers/ConviteControllers");
routes.get("/", ConviteContollers.getAll);
routes.get("/cadastro", ConviteContollers.cadastro);

routes.post("/create", ConviteContollers.create);

//editar
routes.get("/getById/:id/:method", ConviteContollers.getById);

// atualizar

routes.post("/update/:id", ConviteContollers.update);

// deletar 

routes.get("/deletar/:id", ConviteContollers.deletar);

// pesquisar

routes.post("/pesquisa", ConviteContollers.pequisaByName);












module.exports = routes;
