import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './dropdown.directive';
import { ClickToCloseDirective } from './click-to-close.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DropdownDirective, ClickToCloseDirective],
  exports: [
    DropdownDirective,
    ClickToCloseDirective
  ]
})
export class SharedModule { }
