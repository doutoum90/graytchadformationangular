import { Component, OnInit } from '@angular/core';
import { HeaderService, IHeader } from '../../services/header.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'gray-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  header: Observable<IHeader>;

  constructor(private headerS: HeaderService) { }

  ngOnInit(): void {
    this.header = this.headerS.elementHeader();
  }

}
