import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseRegistrationService } from '../firebase-registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fbrs: FirebaseRegistrationService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    this.fbrs.userRegistration(value.userid, value.password);
  }
}
