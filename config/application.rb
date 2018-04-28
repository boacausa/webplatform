require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Uberdo3setor
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    config.autoload_paths += %W(#{config.root}/services)

    Raven.configure do |config|
      config.dsn = 'https://6920abba767647fca7652b987d23ba24:4989dad8b3af4e7593e7da694977e3e5@sentry.io/1197914'
    end
  end
end
