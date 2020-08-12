# Leçon 40 Angular

## Les animations

### Animation sur le routage

``` typescript
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
// ou
import { NoopAnimationsModule } from  '@angular/platform-browser/animations';
@NgModule({
	imports: [
		BrowserAnimationsModule
		// ou NoopAnimationsModule
	]
})
export class AppModule { }
```

dans le router

``` typescript
...
{ path:  'home', loadChildren: () =>  import('./homedir/home.module').then(m  =>  m.HomeModule), data: { animation:  'home' } },
...
```

``` typescript
@Component({
	...
	animations: [routageAnimation]
})
export.class FrontComponent {}
```

``` typescript

import { trigger, transition, style, animate, query, animateChild, group } from '@angular/animations';

export const routageAnimation = trigger('routageAnimation', [
	transition('* <=> *', [
		style({ position:  'relative' }),
		query(':enter, :leave', [
			style({ position:  'absolute', top:  0, left:  0, width:  '100%' })
		]),
		query(':enter', [
			style({ left:  '-100%' })
		]),
		query(':leave', animateChild(), { optional:  true }),
		group([
			query(':leave', [
				animate('300ms ease-out', style({ left:  '100%' }))
			], { optional:  true }),
			query(':enter', [
				animate('300ms ease-out', style({ left:  '0%' }))
			])
		]),
		query(':enter', animateChild()),
	])
])
```

``` html
<div class="container" [@routageAnimation]="monOutlet && monOutlet.activatedRouteData && monOutlet.activatedRouteData['animation']">
    <router-outlet #monOutlet="outlet"></router-outlet>
</div>
```

### Animation sur les etats

```html 
<p [@animationText]="etat">Lorem ...</p>
<button  class="btn btn-primary"  (click)="changerEtat()"> changer Etat</button>

``` 

```typescript
@Component({
	...
	animations: [
		trigger('animationText', [
			state('aurepos', style({ opacity:  1 })),
			state('anime', style({ opacity:  1 })),
			transition('aurepos => anime', [
				animate('2000ms ease-out', keyframes([
					style({ opacity:  0.5, transform:  'translateX(-100px)', offset:  0.3 }),
					style({ opacity:  0.8, transform:  'translateY(-100px)', offset:  0.7 }),
				]))
			]),
			transition('anime => aurepos', [
				animate('500ms ease-out',
					keyframes([
						style({ opacity:  0.2, transform:  'translateX(100px)' }),
						style({ opacity:  0.9, transform:  'translateY(100px)' })
					])
				)
			])
		])
	]
})

export class HomeComponent implements OnInit {
	etat = 'aurepos';
	changerEtat() {
		this.etat = this.etat === 'aurepos' ? 'anime' : 'aurepos';
	}
}
```
