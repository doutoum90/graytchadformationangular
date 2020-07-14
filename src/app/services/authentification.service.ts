import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  // estConnecte = false;

  constructor() { }

  connect() {
    localStorage.setItem('connecter', 'true');
    // this.estConnecte = true;
  }

}
