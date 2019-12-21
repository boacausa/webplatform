web: bundle exec rails server -p $PORT
worker: bundle exec sidekiq -c 2 -q default
release: rake db:migrate
