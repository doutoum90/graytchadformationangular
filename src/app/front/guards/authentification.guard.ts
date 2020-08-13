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
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {  
   /*  if (localStorage.getItem('connecter') !== 'true')
      this.router.navigate(['users/connexion']);
    return localStorage.getItem('connecter') === 'true'; */
    return this.auth.user$.pipe(
      take(1),
      map(user => !!user), // <-- map to boolean
      tap(loggedIn => {
          if (!loggedIn) {
              this.router.navigate(['/users/connexion']);
          }
      })
  )
  }

}
