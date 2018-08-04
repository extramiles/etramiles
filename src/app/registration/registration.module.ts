import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RegistrationModule],

  declarations: [RegisterComponent]
})
export class RegistrationModule { }
