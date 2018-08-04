import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseRegistrationService } from '../firebase-registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fbrs: FirebaseRegistrationService) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    let value = form.value;
    this.fbrs.userLogin(value.userid, value.password);
  }
  onClear(f) {
    f.reset();
  }
}
