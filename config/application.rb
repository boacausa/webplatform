require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Uberdo3setor
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    config.autoload_paths += %W(#{config.root}/services #{config.root}/lib)
    
    config.i18n.default_locale = :'pt-BR'

    config.time_zone = 'America/Sao_Paulo'

    config.filter_parameters << :password

    config.active_job.queue_adapter = :sidekiq
  end
end
