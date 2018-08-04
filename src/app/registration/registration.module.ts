import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],

  declarations: [RegisterComponent],
  exports: [RegisterComponent]
})
export class RegistrationModule { }
