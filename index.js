

require("dotenv").config(); /* configura o DETENV que envia o projeto para a platarforma heroko*/
const express = require("express");/* riquare > importa arquivos da pasta express como o INDEX.JS LICENÇA, READM */

const path = require("path"); /*É uma biblioteca.  caminho */

const app = express();   /* APP executa o EXPRESS*/

const routes = require("./src/routes/routes");

app.set("view engine", "ejs"); /*  O VIEW mostra o caminho para para  o INDEX.EJS que e o html que vai ser executado quando for chamado no RES.RENDER(INDEX)*/

app.use(express.static(path.join(__dirname, "public"))); /* Mostra onde esta o arquivo EJS E FAz RODAR ATRAVES DO CAMINHO QUE ESTA NA const (PATH) E FAZ RODAR TUDO QUE ESTA NA PASTA PUBLIC*/

app.use(express.urlencoded());/* o cliente envia as informações que vem no (body) que estão no <form action="/creat" method="post"> que é enviada como um documento. "json" */ 

app.use(routes);

const port = process.env.PORT || 3000; /* a aplicação vai ser aberta no  PROCESS.ENV.PORT ou a porta 3000 */

app.listen(port, () =>  
  console.log(` Servidor rodando em http://localhost:${port}`)
);
