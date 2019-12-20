web: bundle exec rails server -p $PORT
worker: bundle exec sidekiq -t 25 -c 5 -v
release: rake db:migrate
