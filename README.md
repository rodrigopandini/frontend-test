# Teste para vaga de frontend 

Primeiramente você deve fazer um fork desse projeto para então iniciar os trabalhos, após o teste estar totalmente pronto você deve
abrir uma Pull Request de volta para este repo.

## O teste

Você precisa criar uma SPA que vai consumir a API [Netflix Roulette](http://netflixroulette.net/api/)

Pode usar qualquer framework de CSS para acelerar o desenvolvimento, pois o resultado deve ser totalmente responsivo.
O suporte de navegadores é para IE Edge+. 

### Coisas que sua web app deve permitir
- Busca por filmes (Titulo e Diretores)
- Listar os filmes com seus respectivos thumbnails
- Permitir a visualização individual de cada filme
- Permitir criar uma lista de favoritos e adicionar/remover filmes nela (A lista pode ser somente por sessão não precisa salvar em nenhum banco de dados)

### Coisas a serem avaliadas
- Clareza do código
- HTML limpo e claro
- Controle correto das rotas da aplicação
- Uso correto do git
- Conhecimento de JS
- Testes, testes, testes. Pode usar o que você quiser mas precisa testar o código
- Conhecimento de FP (Functional Programming)

---

# pismflix 

[![logo](./src/assets/pismflix.png)](https://github.com/rodrigopandini/pismflix)  

[![Build Status](https://travis-ci.org/rodrigopandini/pismflix.svg?branch=master)](https://travis-ci.org/rodrigopandini/pismflix)
[![Build status](https://ci.appveyor.com/api/projects/status/5q11fxcspa88y5i7?svg=true)](https://ci.appveyor.com/project/rodrigopandini/pismflix)
[![Coverage Status](https://coveralls.io/repos/github/rodrigopandini/pismflix/badge.svg?branch=master)](https://coveralls.io/github/rodrigopandini/pismflix?branch=master)
[![Dependency Status](https://david-dm.org/rodrigopandini/pismflix.svg)](https://david-dm.org/rodrigopandini/pismflix)
[![devDependency Status](https://david-dm.org/rodrigopandini/pismflix/dev-status.svg)](https://david-dm.org/rodrigopandini/pismflix#info=devDependencies)
[![Dependency Status](https://gemnasium.com/badges/github.com/rodrigopandini/pismflix.svg)](https://gemnasium.com/github.com/rodrigopandini/pismflix)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/669be399989b42a7bd03a6146a701d39)](https://www.codacy.com/app/rodrigopandini/pismflix?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=rodrigopandini/pismflix&amp;utm_campaign=Badge_Grade)
[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/pismflix/Lobby)   

[![Sauce Test Status](https://saucelabs.com/browser-matrix/rodrigopandini.svg)](https://saucelabs.com/u/rodrigopandini)

## Demo

![Demo](./src/assets/demo.gif)  

You can check the online demo here:  

**GitHub Page version**  
[http://rodrigopandini.com/pismflix/](http://rodrigopandini.com/pismflix/)  

**[Optional] Firebase version**  
[https://pismflix.rodrigopandini.com/](https://pismflix.rodrigopandini.com/)  

## Installation

    $ git clone https://github.com/rodrigopandini/pismflix.git && cd pismflix
    $ npm install
    $ npm start

Go to [http://localhost:4200/](http://localhost:4200/)

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).  

## Generate Documentation

Run `npm docs` to generate the documentation.  

You can read the generated documentation for this project in the `docs` folder.

## License

[MIT](https://github.com/rodrigopandini/pismflix/blob/master/LICENSE)
