## Leçon 31 Angular

## CRUD : Users

### Création (Inscription)

POST http://localhost:3000/users
avec un user en paramètre

``` json
{
	"username": "ADMIN2",
	"password": "aDMIN1&tor"
}
```

### Retrieve (Inscription)

Pour username = ADMIN2 et password = aDMIN1&tor
GET http://localhost:3000/users?username=ADMIN2&password=aDMIN1%26tor

### Update (Changement de mot de passe)

pour le user dont l'identifiant est 2.
PUT http://localhost:3000/users/2
avec un user en paramètre

``` json
{
	"username": "ADMIN2",
	"password": "aDMIN1&tor"
}
```

### hash de mot de passe à la création

 Utilisation de [md5](https://www.npmjs.com/package/ts-md5)
 * Installation

``` console
npm i ts-md5 -S
```

dans le composant

``` typescript
import {Md5} from 'ts-md5/dist/md5';
...
let hash = Md5.hashStr("password");
```
