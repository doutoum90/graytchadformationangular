# Leçon 26 Angular

## ngrx/store en plus élégant

### Installation de la schematique

``` console
ng add @ngrx/schematics
```

### utilisation du scaffolding

**création du store à la racine**

``` console
ng g st AppState --root --module app.module.ts
```

**création du reducer**

``` console
ng g r etudiantdir/store/reducer/etudiant -m etudiantdir/etudiant.module.ts --skipTests=true
```

**créér une action**

``` console
ng g a etudiantdir/store/actions/etudiants --skipTests=true
```

**création du selecteur**

``` console
ng g se etudiantdir/store/selectors/etudiant --skipTests=true
```
