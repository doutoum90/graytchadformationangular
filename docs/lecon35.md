# Leçon 35 Angular

## Les interactions inter-composant: du fils au père

## emit event

dans le composant père

``` typescript
direBonjour(user: { username: string }) {
	console.log('Bonjour', user.username);
}
```

``` html
<gray-affiche-etudiant (direBonjourEvent)="direBonjour($event)"></gray-affiche-etudiant>
```

dans le composant fils

``` typescript
@Output('direBonjourEvent') helloEvent: EventEmitter<any> = new  EventEmitter<any>();
sayHello(username: string) {
	this.helloEvent.emit({ username:  username });
}
```

``` html
<a class="btn btn-primary btn-lg" (click)="sayHello('GrayTchad')">Bonjour</a>
```

## services

Le service

``` typescript
export  class  EnvoiMessageService {
	private  _envoiMessageObjectPere$ = new  Subject<string>();
	envoiMessagePere$ = this._envoiMessageObjectPere$.asObservable();

	private  _envoiMessageObjectFils$ = new  Subject<string>();
	envoiMessageFils$ = this._envoiMessageObjectFils$.asObservable();
	envoiMessageAuPere(message: string) {
		this._envoiMessageObjectPere$.next(message);
	}

	envoiMessageAuFils(message: string) {
		this._envoiMessageObjectFils$.next(message);
	}
}
```

composant pere

``` typescript
constructor(readonly service: EnvoiMessageService) { }
envoiMessageAuFils() {
	this.service.envoiMessageAuFils(this.message);
}
```

``` html
<div>
    <p>Message du fils : {{service.envoiMessageFils$ | async | json}}</p>
</div>
<div>
    <input [(ngModel)]="message">
</div>
<div>
    <button (click)="envoiMessageAuFils()">Envoyer Message</button>
</div>
```

dans le composant fils

``` typescript
constructor(readonly  service: EnvoiMessageService) { }
envoiMessageAupere(){
	this.service.envoiMessageAuPere('Merci');
}
```

``` html
<div>
    <p>{{service.envoiMessageAuPere$ | async | json}}</p>
</div>
<div>
    <button (click)="envoiMessageAupere()">Envoyer Message</button>
</div>
```
