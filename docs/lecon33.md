# Leçon 23 Angular

## [La programmation réactive](https://www.learnrxjs.io/learn-rxjs/operators/creation/create)

[Livres](https://xgrommx.github.io/rx-book/index.html)

[Répresentation Visuelle](https://rxmarbles.com)

Les observables sont des collections asynchrones, basés sur le dp observer.

***Les observables vs les tableaux***
Les valeurs du tableau disponible tout de suite alors que celle d'un observable peuvent venir avec le temps.

***Les observables vs les promises***

***cold vs hot observables***

> When the data is produced by the Observable itself, we call it a cold Observable. When the data is produced outside the Observable, we call it a hot Observable.

***cold***

``` typescript
coldObs1$ = Observable.create((observer) => {
	observer.next('Hello');
	observer.next('World');
	observer.next('World');
	observer.next('World');
	observer.error('test');
	observer.complete();
});
coldObs2$= of([4,5,6]);

ngOnInit(): void {
	this.coldObs1$.subscribe(
		v  =>  console.log(v),
		err  =>  console.log('erreur : ', err),
		() =>  console.log('fin de traitement'));
	this.coldObs2$.subscribe(v=>console.log(v));
}
```

***hot***

``` typescript
hotObs = fromEvent(document, 'click');

ngOnInit(): void {
	const sousc = this.hotObs.subscribe((event: any) => {
		console.log(event.clientX, event.clientY);
	});
	sousc.unsubscribe();
}
```

***Les fonctions sur les observables***

* take(n) va piocher les n premiers éléments.
* map(fn)
* filter(predicate) 
* subscribe(fn) : souscription

etc...
