import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RegistrationModule } from './registration/registration.module';
import { NavbarModule } from './navbar/navbar.module';
import { HomeModule } from './home/home.module';
import { AppRouterModule } from './app-router.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RegistrationModule,
    NavbarModule,
    HomeModule,
    HttpClientModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
