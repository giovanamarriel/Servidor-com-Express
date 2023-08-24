<h1 align="center"> Criando meu primeiro servidor HTTP com o ExpressJs </h1>

<div align= "center"> 
  
Neste projeto descrevo os comandos e linhas de código mais primordiais para a criação de um servidor HTTP com o pacote express.js 

</div>

<div align= "center"> 
  
<img src ="/servidor.gif">

</div>

## 👣 Primeiros passos

1. Crie uma nova pasta para armazenar o projeto;
2. Inicialize um package.json com o comando `npm init -y` nesta pasta criada, este arquivo guardará as principais informações, scripts e controle de versionamento dos pacotes instalados no projeto;
3. Ainda dentro desta pasta crie um arquivo de nome `.gitignore` e escreva em cada linha dele o nome de um arquivo que não subirá para o repositório remoto;
4. Com o comando `npm install express` no terminal, faça a instalação do pacote express. Esse pacote nos ajudará na criação da API;
5. Dentro da pasta principal crie uma nova pasta chamada `src`, nela escreveremos os principais códigos de funcionamento do projeto, a começar pelo arquivo index.js, convencionado como o arquivo principal padrão neste processo.

## 📑 Decupando o código

O método require() serve para importar arquivos e/ou bibliotecas. Nesta linha estamos importando o pacote [ExpressJs](https://expressjs.com/pt-br/) para o nosso projeto e colocando-o na variável 'express'

`const express = require('express');`

Aqui estamos instanciando o express declarando-o numa constante. Esta linha "chama" o framework para começar a ser executado.

`const app = express();`

O app.get é uma função que informa ao servidor o que fazer quando receber requisições em uma determinada rota. 
Nesta linha o primeiro parâmetro é o caminho `'/'`, que representa a rota mais primordial de uma URL, ou seja, uma rota sem recursos. O segundo parâmetro é uma arrow function que SEMPRE recebe como parâmetros uma **requisição** e uma **resposta**

O método `.send()` atrelado à `resposta` faz retornar uma mensagem no servidor quando feita uma requisição na rota declarada

`app.get('/', function (requisicao, resposta) {
    resposta.send('Olá! Esse é o meu primeiro servidor com o Express.');
});`

O app.listen() serve para declarar a porta onde ocorrerá a comunicação http deste projeto 

`app.listen(3000);`

🚪 A porta precisa ser informada na URL, sem ela a máquina não saberá onde está ocorrendo a comunicação entre o servidor e o cliente nem qual informação foi solicitada

## ⚙️ Testando 

O primeiro passo para testar se seu servidor está funcionando é executando seu projeto. Num primeiro momento faremos apenas executando o arquivo com o node. 
Perceba que nada aparece no terminal, isso acontece porque nenhuma requisição foi feita ainda.

<img src = "/1.gif">

Para verificar o que será retornado pelo seu servidor para a sua requisição digite num navegador (com o projeto em execução) o endereço no qual seu projeto está rodando. 
A estrutura desse endereço é: `http://localhost:numerodaporta`

<img src = "/2.png">

O conteúdo impresso no navegador é justamente o que foi colocado para ser respondido quando houvesse uma solicitação na rota '/', o papel do resposta.send() é justamente esse; enviar uma resposta à requisição.

<img src = "/3.png">

![Badge Finalizado](http://img.shields.io/static/v1?label=STATUS&message=FINALIZADO&color=GREEN&style=for-the-badge)
