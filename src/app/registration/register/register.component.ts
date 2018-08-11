import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseRegistrationService } from '../firebase-registration.service';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(
    private fbrs: FirebaseRegistrationService,
    private dataService: DataService
  ) {}

  ngOnInit() {}
  onSubmit(form: NgForm) {
    let value = form.value;
    this.fbrs.userRegistration(value.userid, value.password);
    this.dataService
      .registerUser(value.userid, value.password)
      .subscribe(() => {});
  }
  onClear(f) {
    f.reset();
  }
}
