//Arquivo criado apenas para organizar nossas funcoes, e deixar de poluir nosso index.js

export function semana(num) {
    try {
    let msg = '';
    let cond = num === 0 ? msg = 'Domingo' :
               num === 1 ? msg = 'Segunda' :
               num === 2 ? msg = 'Terça'   :
               num === 3 ? msg = 'Quarta'  :
               num === 4 ? msg = 'Quinta'  :
               num === 5 ? msg = 'Sexta'   :
               num === 6 ? msg = 'Sabado'  :
               msg = 'Undefined';
        return msg;
    } catch (error) {
        resp.status(408).send({erro: error.message + 'deu ruim ze'})
    }
}

export function semaforo(cor) {
    try {
        let msg = '';
        let cond = cor = 'verde' ? msg = 'Pode passar' :
            cor = 'amarelo' ? msg = 'Espere' :
                cor = 'vermelho' ? msg = 'Pare' :
                    msg = 'Nao operacional';
        return msg;
    } catch (error) {
        resp.status(408).send({erro: error.message + 'deu ruim ze'})
    }
}

export function fator(num) {
    try {
        let cont = [];
        let rst = 1;
        for (let i = 1; i <= num; i++) {
            cont[i] = i;
            rst *= i;
        }
        console.log(cont + ' = ' + rst);
        return rst;
    } catch (error) {
        resp.status(408).send({erro: error.message + 'deu ruim ze'})
    }
}

export function par(num) {
    try {
        let cont = 0;
        let array = [];
        for (let i = 0; i <= num; i++) {
            if (i % 2 === 0) {
                array[cont] = i;
                cont++;
            }
        }
        return array;
    } catch (error) {
        resp.status(408).send({erro: error.message + 'deu ruim ze'})
    }
}
