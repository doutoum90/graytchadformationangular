import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecuperationDataService } from 'src/app/services/recuperation-data.service';
import { Observable } from 'rxjs';
import { Etudiant } from '../lalekou/lalekou.component';

@Component({
  selector: 'gray-modification-etudiant',
  templateUrl: './modification-etudiant.component.html',
  styleUrls: ['./modification-etudiant.component.scss']
})
export class ModificationEtudiantComponent implements OnInit {

  etudiant : Observable<Etudiant>;
  constructor(private readonly activated: ActivatedRoute, 
    private readonly etudiantService: RecuperationDataService) { }

  ngOnInit(): void {
    this.etudiant = this.etudiantService.getEtudiant(Number(this.activated.snapshot.params.id));
  }

}
