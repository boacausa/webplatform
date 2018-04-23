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
      config.dsn = 'https://db0ca235dbf44be8a4ed35796b72b09c:031b6a4433f545ccae5b2976ea7fa1d9@sentry.io/1193968'
    end
  end
end
