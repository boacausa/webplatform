<a href="https://codeclimate.com/github/boacausa/webplatform/maintainability"><img src="https://api.codeclimate.com/v1/badges/0c390c414647d152de40/maintainability" /></a>
<a href="https://codeclimate.com/github/boacausa/webplatform/test_coverage"><img src="https://api.codeclimate.com/v1/badges/0c390c414647d152de40/test_coverage" /></a>

# Por uma boa causa (Plataforma Rails)

Bem vindo ao projeto Boa causa, neste repositório você irá encontrar o código-fonte para o a plataforma web do projeto.

Link oficial: http://boacausa.org/

### Setup

**Pré-requisitos**

Ter o ruby 2.5.1 ou rbenv instalado.

**Passos de instalação**

* rbenv install ruby 2.5.1
* rbenv local 2.5.1
* gem install bundler
* bundler install
* rails db:setup
* rails s

**Para rodar os testes**

* bundle exec rspec spec
