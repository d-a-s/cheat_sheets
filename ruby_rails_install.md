based on <http://railsapps.github.io/installrubyonrails-ubuntu.html>

* install rvm
`\curl -L https://get.rvm.io | bash -s stable --ruby`

* possibly need stuff to sign
```
sudo apt-get install gnupg2
gpg2 --recv-keys ...
\curl -L https://get.rvm.io | bash -s stable --ruby
```

* update
```
gem update --system

rvm gemset list
rvm gemset use global
gem list
gem outdated
gem update
gem install bundler
gem install nokogiri
```
[current version of Rails.](http://rubygems.org/gems/rails)
```
rvm use ruby-2.4.1@rails5.1.4 --create
gem install rails
rails -v
```

* new rails application
```
mkdir myapp
cd myapp
rvm use ruby-2.4.1@myapp --ruby-version --create
gem install rails
rails new .
```

* misc rails notes:
```
rails new (name)
rails generate (new code)
	rails g
	- scaffold
	rake db:migrate (run all migrations)
	rake db:rollback
	rake db:schema:dump
	rake db:setup		
rails console (debug)
rails server (dev server)
	rails s
rails dbconsole
```
