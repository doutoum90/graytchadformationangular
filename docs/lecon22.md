# Leçon 22 Angular

## La programmation fonctionnelle

* impératif vs declartif
* procedural vs poo

LISP: fonctionnel pure
f(a, b)=a+b

exemple de fonction pure

``` typescript
somme(a: number, b: number): number{
	return a + b;
}
somme(4,5)// vaut 9
```

exemple de fonction impure

``` typescript
a = 4, b = 5;
som = 0;
somme(): void{
	this.a = this.a + this.b;
	this.som  = this.a;
}
// appel: avant appel som =0;
somme();
// après appel som = 9;
```

Les fonctions pures sont des fonctions :

  + qui ne font pas des effets de bords
  + qui font les manipulations sur les parametres

> NB: Il est impossible de faire 100% des fonctions moins encore des fonctions pures avec typescript. On s'efforce de faire le plus de fonctions( fonctions pures) dans notre application pour bénéficier des avantages de la programmation fonctionnelle.

> Avantages du paradigme fonctionnel

	+ facilement testable donc faire à detecter et corriger facilement les bugs eventuels
	+ très utile pour faire des traitements complexes calculs, parallelisation.
	+ jolie pour la lecture
