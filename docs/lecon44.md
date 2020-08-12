# Leçon 44 Angular

##  Deployer l'application sur firebase

### création d'un compte  

Création d'un compte et projet firebase

### installation de l'outils firebase

``` console
npm install -g firebase-tools
```

### connexion à firebase depuis le terminal

``` console
firebase login
```

### configuration projet

* intialisation

``` console
firebase init
```

automatisation du workflow sur github

``` yml

name: CI
on:
	push:
		branches: [ master ]
	pull_request:
		branches: [ master ]
jobs:
	build:
		runs-on: ubuntu-latest
		steps:

    - uses: actions/checkout@v2
    - uses: actions/setup-node@master

		with:
			node-version: 12

    - run: npm install
    - run: npm install -g @angular/cli > /dev/null
    - run: npm run build
    - uses: w9jds/firebase-action@master

		with:
			args: deploy
		env:
			FIREBASE_TOKEN: ${{secrets.CLE_FIREBASE}}
```
