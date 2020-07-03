# Angular 1: Annonce

## Aperçu général

**Definition**: framework multiplateforme réalisé par google en 2009. 

## Motivation

*  demande très élévé
* **documentation**: très documenté 
  + [documentation officiel](https://angular.io/docs)
  + [communauté très réactive](https://stackoverflow.com/questions/tagged/angular) 
* **montée de version**: tout les 6 mois.

## Réalisation

un blog technique
**nom du blog** : ***agourou*** 
**logo**: à definir
**description**: 
un site servant de partage d'idée technique. 

* gestion d'utilisateur:
  + inscription du user
  + validation du compte par l'admin
* gestion articles
  + ajout d'article par un user habilité
  + modification d'un article par un user habilité
  + suppression d'un article par l'admin
  + visionnante d'un article par tout le monde sans être authentifié
* gestion de categorie:
  + ajout, modification par un user habilité
  + supression par l'admin

## déploiement

les sources du projet seront hébergés sur ce compte [GitHub](https://github.com/doutoum90) et l'application sera déployé sur [firebase](https://firebase.google.com/?gclid=Cj0KCQjw0Mb3BRCaARIsAPSNGpXZwLe1Q1WUMZ2eVh43s9-npKh85ejIB3okT54le8OtmsXAZcm6sKwaAt8MEALw_wcB).
Nous utiliserons les workflows GitHub pour le déploiement de l'application après chaque push.

Les données vont êtres stockées sur une base de données non-rélationnel (nosql) basé au format json (mongodb) intégré dans firebase.
