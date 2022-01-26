<a href="https://codeclimate.com/github/boacausa/webplatform/maintainability"><img src="https://api.codeclimate.com/v1/badges/0c390c414647d152de40/maintainability" /></a>
<a href="https://codeclimate.com/github/boacausa/webplatform/test_coverage"><img src="https://api.codeclimate.com/v1/badges/0c390c414647d152de40/test_coverage" /></a>

# Por uma boa causa (Plataforma Rails + React)

Bem vindo ao projeto Boa causa, neste repositório você irá encontrar o código-fonte para o a plataforma web do projeto.

Link oficial: http://boacausa.org/

Link para testes: http://porumaboacausa.herokuapp.com

### Setup

**Requirements**

* [Docker](https://docs.docker.com/install/)
* [rbenv](https://github.com/rbenv/rbenv)
* [Node](https://nodejs.org/en/download/) version 14
* [yarn](https://classic.yarnpkg.com/lang/en/docs/install)
* [redis](https://redis.io/)

Note: both docker and rbenv are optional, they are used to install the postgres database and ruby on the next steps. Feel free to setup the database and ruby on your own if you like.

**Installation**

```shell
docker-compose up -d
rbenv install ruby 3.0.3
rbenv local 3.0.3
gem install bundler
bundler install
rails db:setup
yarn install
cp .env.sample .env
```

**Starting application**

```shell
rails s
# In a different terminal tab
./bin/webpack-dev-server
```

Open http://localhost:3000/

**Run tests**

```shell
bundle exec rspec spec
```

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
