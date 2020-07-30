import { Component, OnInit } from '@angular/core';
import { HeaderService, IHeader } from '../../../services/header.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'gray-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  header: Observable<IHeader>;

  constructor(
    private readonly headerS: HeaderService,
    private readonly router: Router,
    private readonly auth: AuthentificationService) { }

  ngOnInit(): void {
    this.header = this.headerS.elementHeader();
  }

  estConnecte(): Boolean {
    return localStorage.getItem('connecter') === 'true'
  }

  deconnecter() {
    this.auth.disconnect();
    this.router.navigate(['users/connexion']);
  }

}
