import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'gray-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  constructor(
    private readonly auth: AuthentificationService,
    private readonly router : Router) { }

  ngOnInit(): void {
  }
  connexion() {
    this.auth.connect();
    this.router.navigate(['list']);
  }


}
