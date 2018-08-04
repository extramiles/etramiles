import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickToClose]'
})
export class ClickToCloseDirective {

  constructor() { }

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') closeOpenDropdown() {}

}
