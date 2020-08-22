import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from '../../services/authentification.service';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate {

  constructor(
    private readonly router: Router,
    private readonly auth: AuthentificationService
  ) {
  }
  canActivate(): boolean {
    return !!localStorage.getItem('user');
    /*
     return localStorage.
     return this.auth.user$.pipe(
       take(1),
       map(user =>  !!user),
       tap((loggedIn: boolean)=> {
         if(!loggedIn){
           this.router.navigate(['users/connexion'])
         }
       })
     )
   } */


  }

}
