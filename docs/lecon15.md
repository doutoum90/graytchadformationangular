# Leçon 15 Angular

## Les pipes

commande pour générer un pipe

``` console
ng g p nom-pipe
```

### les pipes d'angular 

définies dans `@angular/common`
1 - async
2 - json
3 - slice
4 - uppercase
5- lowercase
6- titlecase
7- number
8- percent 
9- currency
10 - date

### les pipes utilisateurs

``` typescript
import { Pipe, PipeTransform } from  '@angular/core';

@Pipe({
	name:  'inverser'
})
export  class  InverserPipe  implements  PipeTransform {
	transform(value: any, ...args: any[]) {
		return  value.split(' ').reverse().join(' ');
	}
}

@Pipe({
	name:  'agefr'
})
export  class  AgeFrPipe  implements  PipeTransform {
	transform(value: any, ...args: any[]) {
		return  value + ' ans';
	}
}
```
