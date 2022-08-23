setup: install publish
	npm link

install:
	npm ci

brain-games:
	node bin/brain-games.js

dev:
	npx simple-git-hooks

lint:
	npx eslint .

publish:
	npm publish --dry-run
