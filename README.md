<a href="https://codeclimate.com/github/boacausa/webplatform/maintainability"><img src="https://api.codeclimate.com/v1/badges/0c390c414647d152de40/maintainability" /></a>
<a href="https://codeclimate.com/github/boacausa/webplatform/test_coverage"><img src="https://api.codeclimate.com/v1/badges/0c390c414647d152de40/test_coverage" /></a>

# Por uma boa causa (Plataforma Rails + React)

Bem vindo ao projeto Boa causa, neste repositório você irá encontrar o código-fonte para o a plataforma web do projeto.

Link oficial: http://boacausa.org/

Link para testes: http://porumaboacausa.herokuapp.com

### Setup

**Pré-requisitos**

* Ter o ruby 2.6.1 ou rbenv instalado
* Ter o [docker](https://docs.docker.com/install/) e [docker-compose](https://docs.docker.com/compose/install/) instalado

**Passos de instalação**

* docker-compose up -d
* rbenv install ruby 2.6.1
* rbenv local 2.6.1
* gem install bundler
* bundler install
* rails db:setup
* rails s

**Para rodar os testes**

* bundle exec rspec spec

**Para rodar webpacker**

_Estamos testando iniciativas para migrar a parte de front-end para ReactJS_

* ./bin/webpack-dev-server

### Quero contribuir

Quer contribuir como desenvolvedor no projeto? Da uma olhada nas nossas [issues](https://github.com/boacausa/webplatform/issues?q=is%3Aopen+is%3Aissue+-label%3Adiscussion+-label%3A%22%5Bzube%5D%3A+In+Review%22+-label%3Aidea)


### Roadmap

**Ideia de primeira entrega:**

* Página de listagem de ONGs (primeiramente ONGs que conhecemos e validamos)
* Possíbilidade de fazer doações por meio de pagamento online para essas ONGs
  * Estamos pensando em formas de fazer com que essas doações sejam transparentes, pois a idea é estimular as pessoas a doarem dinheiro de forma segura sabendo que é utilizado para a boa causa dos animais
* Página de listagem de pets para adoção, pets os quais são cadastrados por voluntário dessas ONGs
* Uma página administrativa para voluntários das ONGs
* Opção para solicitar adoção de pets, contendo termo de compromisso e podendo ser administrado pelos voluntários das ONGs
