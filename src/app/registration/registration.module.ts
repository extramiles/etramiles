import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RegisterComponent],

  declarations: [RegisterComponent]
})
export class RegistrationModule { }
