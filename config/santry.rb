# frozen_string_literal: true

require "raven"

Raven.configure do |config|
  config.dsn = Rails.application.secrets.raven_dsn
end
