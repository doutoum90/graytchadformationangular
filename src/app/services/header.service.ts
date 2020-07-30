import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private header: IHeader = {
    titre: 'Angular sur Gray TCHAD',
    menuGauche: [
      { nom: 'Home', url: 'home' },
      { nom: 'About', url: 'about' },
     /*  { nom: 'Liste des étudiants', url: 'list' }, */
      { nom: 'Contact', url: 'contact' }
    ],
    menuDroite: [
      { nom: 'Connexion', url: 'users/connexion' },
      { nom: 'Inscription', url: 'users/inscription' }]
  };

  constructor() { }

  elementHeader(): Observable<IHeader> {
    return of(this.header);
  }
}


export interface IMenu {
  nom: string;
  url: string;
}
export interface IHeader {
  titre: String;
  menuGauche: Array<IMenu>;
  menuDroite: Array<IMenu>;
}