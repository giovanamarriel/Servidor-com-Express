const express = require('express');
//instanciei/chamei/importei o express colocando-o numa constante.

//forma de trabalhar com importação de dependencias/bibliotecas com o nodejs.

//declare uma constante, =, require('nomedabiblioteca');

//express é a biblioteca que utilizaremos para criar um servidor HTTP, que será utilizado em sua função de servidor para responder requisições do cliente.

const app = express();
//chamando o framework express para ser executado.

//const app é uma instância do objeto express(), ou seja, a partir de agora app estará diretamente ligado às funções do express.

//agora conseguimos usar o express para fazer diversas implementações neste servidor que estamos criando.

app.get('/', function (requisicao, resposta) {
    //callback é uma função sendo passada dentro de outra como argumento, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.
    resposta.send('Olá! Esse é o meu primeiro servidor com o Express.');
});

//app.get: esta função informa ao servidor o que fazer quando receber solicitações em uma determinada rota.

//app.get() destina-se a corresponder e manipular uma rota específica quando solicitado por get http.

//GET é um método do express que cria uma rota com o verbo GET. É através desta rota que outros computadores conseguirão se comunicar com este servidor http que estamos criando.

// app.get primeiro recebe a rota: '/', que é só barra pois não haverá nenhum outro recurso, ou seja, é a rota principal (podemos interpretar como a página principal).

//Uma rota em uma API é um “caminho” que será “chamado” por uma aplicação ou cliente (que no caso desse exercício é o navegador) e responderá alguma informação. 

//depois a função da rota: 
//function(requisicao, resposta) {
// } 
//são as funções que têm acesso ao objeto de *solicitação* e ao objeto de *resposta*.

//SOBRE PORTAS:
//esta comunicação HTTP entre cliente e servidor precisa estar ocorrendo numa porta específica.

//é preciso liberar uma porta do meu servidor/computador para que este servidor que estou criando seja acessado.

app.listen(3000);
//o metodo listen (ouvinte) ficará "ouvindo" a porta 3000

//ao tentar executar este código nada aparece, apesar disso, ele está sendo executado esperando uma comunicação na porta referida.

//para acessar esta porta no navegador digite http://localhost:3000
//para que a mensagem do get "resposta.send" apareça é necessário que este arquivo esteja em execução no terminal com o "node ./src/index.js"

//LOCALHOST é o servidor local, ou seja, esta máquina que estamos usando para criar o servidor http.