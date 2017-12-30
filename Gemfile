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
gem 'rails', '~> 5.1'
gem 'sass-rails', '~> 5.0'
gem 'turbolinks', '~> 5'
gem 'uglifier', '>= 1.3.0'

gem 'bootstrap-sass', '~> 3.3.6'
gem 'bootstrap_sb_admin_base_v2'
gem 'bootswatch-rails'
gem 'devise'
gem 'paperclip', '~> 5.0.0'

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'rubocop'
end

group :development do
  gem 'listen', '~> 3.0.5'
  gem 'minitest-rails-capybara'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
