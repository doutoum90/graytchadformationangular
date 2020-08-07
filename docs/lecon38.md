# Leçon 38 Angular

## internationalization(I18n)

``` html
<p i18n="Paragraphe|text à traduire@@paragraphe">Votre texte ici</p>
```

extraction

``` console
ng xi18n --output-path src/locale
```

dans angular.json après project projectType

```json 
"i18n": {

	"locales": {
		"fr": "src/locale/messages.fr.xlf",
		"ar": "src/locale/messages.ar.xlf"
	}

}

``` 

dans angular.json sous architecte/build/configurations ajouté ceci

```json
"fr": {
	"localize": ["fr"]
},
"ar": {
	"localize": ["ar"]
}
```

dans angular.json sous serve/configurations ajouté ceci

``` json
"fr": {
	"browserTarget": "graytchadformationangular:build:fr"
},
"ar": {
	"browserTarget": "graytchadformationangular:build:ar"
}
```

dans package.json sous les scripts ajouter ceci

``` 
"start:fr": "ng serve --configuration=fr --port=4201",
"start:ar": "ng serve --configuration=ar --port=4202",
"build:fr": "ng build --configuration=fr",
"build:ar": "ng build --configuration=ar"
```
