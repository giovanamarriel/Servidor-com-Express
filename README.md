<h1 align="center"> Criando meu primeiro servidor HTTP com o ExpressJs </h1>

<div align= "center"> 
  
Neste projeto descrevo os comandos e linhas de código mais primordiais para a criação de um servidor HTTP com o pacote express.js 

</div>

<div align= "center"> 
  
<img src ="/servidor.gif">

</div>

## 👣 Primeiros passos para criar um HTTP server

1. Crie uma nova pasta para armazenar o projeto;
2. Inicialize um pacote com o comando `npm init -y` nesta pasta criada;
3. Ainda dentro desta pasta crie um arquivo de nome `.gitignore` e escreva em cada linha dele o nome de um arquivo que não subirá para o repositório remoto;
4. Com o comando `npm install express` no terminal, faça a instalação do pacote express;
5. Dentro da pasta principal crie uma nova pasta chamada `src`, nela escreveremos os principais códigos de funcionamento do projeto.

## 📑 Decupando o código

O método require() serve para importar arquivos e/ou bibliotecas. Nesta linha estamos importando o pacote ExpressJs para o nosso projeto e colocando-o na variável 'express'

`const express = require('express');`

Aqui estamos instanciando o objeto express declarando-o numa constante. Esta linha "chama" o framework para ser executado.

`const app = express();`

O app.get é uma função que informa ao servidor o que fazer quando receber requisições em uma determinada rota. 
Nesta linha o primeiro parâmetro é o caminho `'/'`, que representa a rota mais primordial de uma URL, ou seja, uma rota sem recursos. O segundo parâmetro é uma arrow function que SEMPRE recebe como parâmetros uma **requisição** e uma **resposta**

O método `.send()` atrelado à `resposta` faz retornar uma mensagem no servidor quando feita uma requisição na rota declarada

`app.get('/', function (requisicao, resposta) {
    resposta.send('Olá! Esse é o meu primeiro servidor com o Express.');
});`

O app.listen() serve para declarar a porta onde ocorrerá a comunicação http deste projeto específico

`app.listen(3000);`

![Badge Finalizado](http://img.shields.io/static/v1?label=STATUS&message=FINALIZADO&color=GREEN&style=for-the-badge)
