# Leçon 10 Angular
## [Reorganisation et lazyloading](https://getbootstrap.com/)

### découpage des composants
decoupage des composants de façon logique
```text
src/
└── app/
    ├── app.module
    ├── app-routing.module
    │   ├── home 	 ├── home.module
	│	│		 	 ├── home-routing.module
	│   ├── contact  ├── contact.module
	│	│		 	 ├── contact-routing.module
	│   ├── about	 ├── about.module
	│	│		 	 ├── about-routing.module
	│   ├── etudiant ├── etudiant.module
	│	│		 	 ├── etudiant-routing.module
```

### mise en place du lazyloading

```typescript
import { NgModule } from  '@angular/core';
import { RouterModule, Routes } from  '@angular/router';
import { NotFoundComponent } from  './core/not-found/not-found.component';

const mesRoutes: Routes = [
	{ path: 'home', loadChildren: () =>  import('./homedir/home.module').then(m  =>  m.HomeModule) },
	{ path: 'about', loadChildren: () =>  import('./aboutdir/about.module').then(m  =>  m.AboutModule) },
	{ path: 'contact', loadChildren: () =>  import('./contactdir/contact.module').then(m  =>  m.ContactModule) },
	{ path: 'list', loadChildren: () =>  import('./etudiantdir/etudiant.module').then(e  =>  e.EtudiantModule) },
	{ path: '', redirectTo:  'home', pathMatch:  'full' },
	{ path: '**', component:  NotFoundComponent, pathMatch:  'full' },
];
@NgModule({
	imports: [RouterModule,RouterModule.forRoot(mesRoutes)],
	exports: [RouterModule]
})
export  class  AppRoutingModule { }
```