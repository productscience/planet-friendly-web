serve:
	jekyll serve &\
	browser-sync start --proxy 'localhost:4000' --files '_site' 'assets'

install:
	npm install
	bundle install

deploy:
	jekyll build
	firebase deploy

.PHONY: install
