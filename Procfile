web: bundle exec rails server -p $PORT
worker: bundle exec sidekiq -t 25
release: rake db:migrate
