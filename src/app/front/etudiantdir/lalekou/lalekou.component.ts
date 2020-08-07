import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { RecuperationDataService } from '../../../services/recuperation-data.service';
import { faSearch, faTrash, faEdit, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { mergeMap, map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'gray-lalekou',
  templateUrl: './lalekou.component.html',
  styleUrls: ['./lalekou.component.scss']
})
export class LalekouComponent {
  iconSuppr: IconDefinition = faTrash;
  iconModifier: IconDefinition = faEdit;
  iconZoom: IconDefinition = faSearch;
  @Input() capacite = 10;
  @Input() numeroPage = 1;
  @Input() etudiants$: Observable<any>;
  @Input() nombreTotal$: Observable<number>;
  
  @Output() afficheEvent: EventEmitter<any> = new EventEmitter();
  @Output() supprimeEvent: EventEmitter<any> = new EventEmitter();
  @Output() detailEvent: EventEmitter<any> = new EventEmitter();
  @Output() modifieEvent: EventEmitter<any> = new EventEmitter();
  @Output() propagerEvent: EventEmitter<any> = new EventEmitter();

  @ViewChild('input') input: ElementRef;
  constructor(
    private readonly service: RecuperationDataService,
  ) { }
  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'keydown')
      .pipe(
        debounceTime(500),
        map((data: any) => data.target.value),
        mergeMap(v => {
          return this.service.getEtudiantbyName(v, this.numeroPage, this.capacite);
        })).subscribe((v: any) => console.log(v));
  }

  afficher(path: string, id: number): void {
    this.afficheEvent.emit({ path, id });
  }

  supprimer(id: number) {
    this.supprimeEvent.emit({ id });
  }

  modifier(id: number) {
    this.modifieEvent.emit({ id });
  }
  detail(id: number) {
    this.detailEvent.emit({ id });
  }
  private propager(numeroPage, capacite) {
    this.propagerEvent.emit({ numeroPage, capacite });
  }

  suivant(nb: number) {
    if (this.numeroPage < nb) {
      this.numeroPage++;

      this.propager(this.numeroPage, this.capacite);
    }
  }

  precedent() {
    if (this.numeroPage > 1) {
      this.numeroPage--;

      this.propager(this.numeroPage, this.capacite);
    }
  }
  
  allerA(nb: number) {
    this.numeroPage = nb;
    this.propager(this.numeroPage, this.capacite);
  }
  
  range(fin: number) {
    return Array.from({ length: fin }, (v, k) => k + 1);
  }
 
}


