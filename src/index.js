import "dotenv/config"
import express from "express"
import cors from "cors"

import endpoints from "./endpoints.js"

//Para criaçao de nosso servidor devemos criar um objeto que utilize o "express"
const server = express();
//Funcao cors, para que nosso servidor possa ser acessado por outro dominios, caso nao for utilizada, o servido so podera ser acessado localmente.
server.use(cors());
//Para que possamos usar um parametro de corpo, colocar um "server.use(express.json())" 
server.use(express.json()); 
server.use(endpoints);

//Para que nosso servidor possa usar nossa variavel de estado criada em nosso arquivo ".env", devemos usar a funçao "listen", tambem podemos criar uma funcao anonima, de callback, para sermos avisados se tudo ocorrer como planejado (Servidor subir na porta correta, sintax escrita corretamente, todos elementos existirem etc)
server.listen(process.env.PORT, () => console.log(`API NA PORTA ${process.env.PORT}`));
