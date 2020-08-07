# Leçon 39 Angular

## Site multilingue avec ngx-translate

``` console
npm i @ngx-translate/core -S
npm i @ngx-translate/http-loader -S
ou
npm i @ngx-translate/core @ngx-translate/http-loader -S

```

``` typescript
import {HttpClient, HttpClientModule} from  '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
export  function  HttpLoaderFactory(httpClient:  HttpClient)  {
	return  new  TranslateHttpLoader(httpClient);
}
@NgModule({
	...
	imports:  [
		BrowserModule,
		HttpClientModule,
		TranslateModule.forRoot({
			loader:  {
			provide:  TranslateLoader,
			useFactory:  HttpLoaderFactory,
			deps:  [HttpClient]
			}
		})
	],
})
export class AppModule  {  }
```

sous le dossier assets créer 

* le dossier i18n
* les fichiers json des différentes langues sous ce dossier (ar.json, fr.json)

Dans le composant parent

``` typescript
import {TranslateService} from '@ngx-translate/core';
export class AppComponent  {
	constructor(public translate:  TranslateService)  {
		translate.addLangs(['en',  'fr']);
		translate.setDefaultLang('en');
		const browserLang = translate.getBrowserLang();
		translate.use(browserLang.match(/en|fr/)  ? browserLang :  'en');
	}
}
```

``` html
<div>
    <h2>{{ 'HOME.TITLE' | translate }}</h2>
    <label>{{ 'HOME.SELECT' | translate }}
        <select #langSelect (change)="translate.use(langSelect.value)">
            <option *ngFor="let lang of translate.getLangs()" [value]="lang" [selected]="lang === translate.currentLang">{{ lang }}</option>
        </select>
    </label>
</div>
```
