import { Component, OnInit } from '@angular/core';
import { HeaderService, IHeader } from '../../services/header.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'gray-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  header: Observable<IHeader>;
  constructor(
    public readonly translate: TranslateService,
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

  transform(data){
    // console.log(data);
    return JSON.parse(data);
  }

}
