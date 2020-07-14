import { Component, OnInit } from '@angular/core';
import { HeaderService, IHeader } from '../../services/header.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'gray-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  header: Observable<IHeader>;

  constructor(private headerS: HeaderService, private router: Router) { }

  ngOnInit(): void {
    this.header = this.headerS.elementHeader();
  }

  estConnecte(): Boolean {
    return localStorage.getItem('connecter') === 'true'
  }

  deconnecter() {
    localStorage.removeItem('connecter');
    this.router.navigate(['connexion']);
    // 
  }


}
