import { Component, OnInit } from '@angular/core';
import { HeaderService, IHeader } from '../../services/header.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { take, map } from 'rxjs/operators';

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
    public readonly auth: AuthentificationService) { }

  ngOnInit(): void {
    this.header = this.headerS.elementHeader();
  }

  estConnecte(): Observable<boolean> {
    return this.auth.user$.pipe(
      take(1),
      map(user => user),
    )
  }

  deconnecter() {
    this.auth.disconnect();
    this.router.navigate(['users/connexion']);
  }

}
