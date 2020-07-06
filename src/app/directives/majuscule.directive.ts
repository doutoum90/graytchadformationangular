import { Directive, HostListener, ElementRef, Input, forwardRef, Renderer2, Self } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
@Directive({
  selector: '[grayMajuscule]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MajusculeDirective),
      multi: true,
    },
  ],
})
export class MajusculeDirective {

  constructor(@Self() private _el: ElementRef, private _renderer: Renderer2) { }

  @HostListener('keyup', ['$event'])
  onKeyDown(evt: KeyboardEvent) {
    const value = this._el.nativeElement.value.toUpperCase();
    this._renderer.setProperty(this._el.nativeElement, 'value', value);
    evt.preventDefault();
  }

}
