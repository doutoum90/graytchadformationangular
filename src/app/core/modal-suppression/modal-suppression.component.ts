import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataModal } from '../../models/data.model';

@Component({
  selector: 'gray-modal-suppression',
  templateUrl: './modal-suppression.component.html',
  styleUrls: ['./modal-suppression.component.scss']
})
export class ModalSuppressionComponent implements OnInit {
  @Input() data: DataModal;

  constructor(private readonly modalService: NgbActiveModal) { }

  ngOnInit(): void {
  }

  ok() {
    this.modalService.close({ valeur: 'droit de suppression' });
  }

  annuler() {
    this.modalService.dismiss({ valeur: 'ne pas supprimer' });
  }

}
