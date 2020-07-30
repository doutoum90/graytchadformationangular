import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[grayNombre]'
})
export class NombreDirective {
  @Input() grayNombre: boolean;

  constructor() { }

  @HostListener("keydown", ['$event'])
  transformer(evt: KeyboardEvent) {
    if (this.grayNombre) {
      if ([46, 8, 9, 27, 13, 110, 190].indexOf(evt.keyCode) !== -1 ||
        // tout selectionner : Ctrl+A
        (evt.keyCode === 65 && (evt.ctrlKey || evt.metaKey)) ||
        // copier : Ctrl+C
        (evt.keyCode === 67 && (evt.ctrlKey || evt.metaKey)) ||
        // coller: Ctrl+V
        (evt.keyCode === 86 && (evt.ctrlKey || evt.metaKey)) ||
        // couper: Ctrl+X
        (evt.keyCode === 88 && (evt.ctrlKey || evt.metaKey)) ||
        // touche de direction
        (evt.keyCode >= 35 && evt.keyCode <= 39)) {
        // quitter sans rien faire
        return;
      }
      // si la valeur saisie est un nombre
      if ((evt.shiftKey
        || (evt.keyCode < 48 || evt.keyCode > 57))
        && (evt.keyCode < 96 || evt.keyCode > 105)) {
        evt.preventDefault();
      }
    }
  }

}
