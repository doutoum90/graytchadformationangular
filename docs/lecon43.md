# Leçon 43 Angular

## Deployer l'api sur firebase

### création d'un compte  

Création d'un compte et projet firebase

### installation de l'outils firebase

``` console
npm install -g firebase-tools
```

### le cli nest

``` console
npm install -g @nestjs/cli
```

### connexion à firebase depuis le terminal

``` console
firebase login
```

### configuration projet

* intialisation

``` console
firebase init functions
```

### Package json

``` json
"scripts": {
	"serve": "npm run build && firebase serve --only functions",
	"shell": "npm run build && firebase functions:shell",
	"start": "npm run shell",
	"deploy": "firebase deploy --only functions",
	"logs": "firebase functions:log"
}
```

``` json
"engines": {
   "node": "8"
 },
```

``` json
"dependencies": {
    "firebase-admin": "^8.6.0",
    "firebase-functions": "^3.3.0"
  },
  "devDependencies": {
    "typescript": "^3.2.2",
    "firebase-functions-test": "^0.1.6"
  },
```

``` json
"main": "dist/index.js"
```

``` console
npm install
```

index.ts

``` typescript
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as functions from 'firebase-functions';
 
import { AppModule } from './app.module';
 
const expressServer = express();
 
const createFunction = async (expressInstance): Promise<void> => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );
 
  await app.init();
};
 
export const api = functions.region('europe-west1')
  .https.onRequest(async (request, response) => {
    await createFunction(expressServer);
    expressServer(request, response);
  });

```

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
    - run: npm run build
    - uses: w9jds/firebase-action@master

		with:
			args: deploy
		env:
			FIREBASE_TOKEN: ${{secrets.CLE_FIREBASE}}
```
