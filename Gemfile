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

gem 'bootstrap', '~> 4.1.3'
gem 'bootstrap_sb_admin_base_v2'
gem 'devise'

gem 'paperclip', '~> 5.2.0'
gem 'omniauth'
gem 'omniauth-facebook'
gem 'omniauth-google-oauth2'

gem 'activestorage', '>= 5.2.1.1'

group :development, :test do
  gem 'capybara'
  gem 'dotenv-rails'
  gem 'faker'
  gem 'factory_bot_rails'
  gem 'rubocop'
  gem 'rspec-rails', '~> 3.7'
  gem 'rails-controller-testing'
  gem 'simplecov'
  gem 'rspec_junit_formatter'
end

group :development do
  gem 'listen', '~> 3.0.5'
  gem 'minitest-rails-capybara'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
  gem 'guard-livereload'
  gem 'guard-rspec'
end

group :production do
  gem 'aws-sdk', '2.10.47'
  gem 'unicorn'
  gem 'sentry-raven'
end

gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
