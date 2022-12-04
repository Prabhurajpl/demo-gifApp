import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[Checkboxstyle]'
})
export class CheckboxDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.transform = "scale(1.5)";
    this.element.nativeElement.style.marginLeft = "7px"
    this.element.nativeElement.style.marginTop = "7px";

  }

}

enum checkboxstyle {
  width = "1.15em",
  height = "1.15em",
  border = "0.15em solid currentColor"
}