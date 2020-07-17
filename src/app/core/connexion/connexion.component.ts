import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';;

interface User {
  password?: string;
  username?: string;
}
@Component({
  selector: 'gray-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  user: User = {};
  messageErreur = 'Identifiants incorrect';
  afficherMessageErreur = false;
  constructor(
    private readonly auth: AuthentificationService,
    private readonly router: Router) { }

  ngOnInit(): void {
  }
  connexion() {
    console.log('validation du formulaire');
    if (this.user.username === 'ADMIN' && this.user.password === 'ADMIN') {
      this.auth.connect();
      this.router.navigate(['list']);
    }
    this.afficherMessageErreur = true;
  }

}
