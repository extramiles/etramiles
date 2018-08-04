import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],

    declarations: [RegisterComponent, LoginComponent],
  exports: [RegisterComponent,  LoginComponent]
})
export class RegistrationModule { }
