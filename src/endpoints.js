import { Router } from "express"
import { par, fator, semaforo, semana } from "./services.js"

//Para que possamos continuar usando o objeto "server" e, consequencialmente ser possivel a criaçao de API's, devemos importar o "Router", que baixamos anteriormente no terminal, com o comando "npm install express"
const server = Router();


/* resp.send para enviar resposta ao nosso user.
   server.get para que algo seja implementado ao nosso server, observe que usamos uma funcao chamada "semaforo" que foi importada da pasta "services.js"*/
server.get('/semaforo/:cor', (req, resp) => {
    let a = req.params.a;
    let x = semaforo(a);
    resp.send({cor:x})
})

server.post('/sequencia', (req, resp) => {
    let a = req.body.a
    let x = par(a);
    resp.send({dia:x})
})



//Req.body faz com que o parametro seja lido, apartir do body(objeto json). Observe que nesse nao usamos um "get" mas sim, "post";
server.post('/fatorial', (req, resp) => {
    let a = req.body.a;
    let x = fator(a);
    resp.send({ fatorial: x });
})

server.post('/semana', (req, resp) => {
    let a = req.body.a;
    let x = semana(a);
    resp.send({dia:x})
})

//Devemos exportar o server ao final do documento, por ter apenas um export em nosso arquivo, podemos colocar o "default" logo a frente do "export".
export default server;
