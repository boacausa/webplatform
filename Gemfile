source 'https://rubygems.org'
ruby "2.6.3"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 6.0'

gem 'coffee-rails', '~> 4.2'
gem 'cpf_cnpj'
gem 'validators'
gem 'faker'
gem 'jbuilder', '~> 2.5'
gem 'jquery-rails'
gem 'nokogiri', '~> 1.10.8'
gem 'pg'
gem 'puma', '~> 4.3'
gem 'sass-rails', '~> 5.0'
gem 'turbolinks', '~> 5'
gem 'uglifier', '>= 1.3.0'
gem 'webpacker', '~> 4.x'
gem 'react-rails'

gem 'bootstrap', '>= 4.3.1'
gem 'bootstrap_sb_admin_base_v2'
gem 'devise'

gem 'omniauth'
gem 'omniauth-facebook'
gem 'omniauth-google-oauth2'

gem 'activestorage', '>= 5.2.1.1'

gem 'route_translator'
gem 'i18n'
gem 'sidekiq', '5.2.7'

group :development, :test do
  gem 'capybara'
  gem 'dotenv-rails'
  gem 'faker'
  gem 'factory_bot_rails'
  gem 'rspec-rails', '~> 3.7'
  gem 'rails-controller-testing'
  gem 'shoulda-matchers'
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
  gem 'byebug'
end

group :production do
  gem 'unicorn'
  gem 'sentry-raven'
  gem 'aws-sdk-s3'
end

gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
