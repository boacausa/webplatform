source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

gem 'coffee-rails', '~> 4.2'
gem 'cpf_cnpj'
gem 'faker'
gem 'jbuilder', '~> 2.5'
gem 'jquery-rails'
gem 'nokogiri', '~> 1.8.1'
gem 'pg'
gem 'puma', '~> 3.0'
gem 'rails', '~> 5.2'
gem 'sass-rails', '~> 5.0'
gem 'turbolinks', '~> 5'
gem 'uglifier', '>= 1.3.0'

gem 'bootstrap', '>= 4.3.1'
gem 'bootstrap_sb_admin_base_v2'
gem 'devise'

gem 'omniauth'
gem 'omniauth-facebook'
gem 'omniauth-google-oauth2'

gem 'activestorage', '>= 5.2.1.1'

gem 'route_translator'
gem 'i18n'

group :development, :test do
  gem 'capybara'
  gem 'dotenv-rails'
  gem 'faker'
  gem 'factory_bot_rails'
  gem 'rspec-rails', '~> 3.7'
  gem 'rails-controller-testing'
  gem 'simplecov'
  gem 'rspec_junit_formatter'
end

group :development do
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
  gem 'guard-livereload'
  gem 'guard-rspec'
  gem 'rubocop', '~> 0.62.0', require: false
end

group :production do
  gem 'unicorn'
  gem 'sentry-raven'
  gem 'aws-sdk-s3'
  gem 'appsignal'
end

gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
