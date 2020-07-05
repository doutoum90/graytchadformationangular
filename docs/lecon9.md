# Leçon 9 Angular

## [Mettre en place Bootstrap](https://getbootstrap.com/)

### Installation 

``` console
npm install bootstrap@3 jquery popper.js #pour la version 3
```

``` console
npm install bootstrap jquery popper.js #pour la version 4 (utilisé pour ce cours)
```

### Configuration

**dans angular.json**

``` json
"styles": [
	"src/styles.scss",
	"node_modules/bootstrap/dist/css/bootstrap.min.css"
	],
"scripts": [
	"node_modules/bootstrap/dist/js/bootstrap.min.js",
	"node_modules/jquery/dist/jquery.min.js",
	"node_modules/popper.js/dist/umd/popper.min.js"
]
```

### Utilisation

header

``` html
<header class="mb-5">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">Angular sur Gray TCHAD</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" routerLink="home">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" routerLink="about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" routerLink="list">Liste des étudiants</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" routerLink="contact">Contact</a </li>
            </ul>
        </div>
    </nav>
</header>
```

**contenu**

``` html
<gray-header></gray-header>
<main role="main" style="padding-top: 60px;" class="flex-shrink-0">
    <div class="container">
        <router-outlet></router-outlet>
    </div>
</main>
<gray-footer></gray-footer>
```

**Footer (pied de page)**

``` html
<footer class="footer mt-auto py-3">
    <div class="container">
        <span class="text-muted">Place sticky footer content here.</span>
    </div>
</footer>
```
