## Leçon 30 Angular
## CRUD : Etudiants
### Create 
* POST avec paramètre

POST http://localhost:3000/etudiants
parametre: 
```json 
{
	"nom": "MOUSTAPHA",
	"prenom": {
		"prenom1": "Ahmat Khalid",
		"prenom2": "Coach Masta"
	},
	"age": 25,
	"dateNaissance": "1970-01-01T23:15:30.000Z",
	"fraisSubsistance": 1000000,
	"note": 1
}
```
dans le service angular 

```typescript
creerEtudiant(donnees: Etudiant): Observable<Etudiant> {
	return  this.http.post<Etudiant>(this.API + '/etudiants/', donnees);
}
```


### Retrieve
* One (Get avec paramètre id ou autre attribut)

GET http://localhost:3000/etudiants/1

* many (Get avec paramètre numero de page et pagination)

GET http://localhost:3000/etudiants?_start=1&_end=3

GET http://localhost:3000/etudiants?_page=1&_limit=3

GET http://localhost:3000/users?username=ADMIN2&password_likeaDMIN1&tor

* All (Get sans paramètre)

GET http://localhost:3000/etudiants

### Update 
PUT avec paramètre  id et autre champs qui changent)
PUT http://localhost:3000/etudiants/5

parametre: 
```json 
{
	"nom": "MOUSTAPHA",
	"prenom": {
		"prenom1": "Ahmat Khalid",
		"prenom2": "Coach Masta"
	},
	"age": 25,
	"dateNaissance": "1970-01-01T23:15:30.000Z",
	"fraisSubsistance": 1000000,
	"note": 1
}
```

### Delete
* DELETE avec paramètre  id

DELETE http://localhost:3000/etudiants/5