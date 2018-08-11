import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseRegistrationService } from '../firebase-registration.service';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private fbrs: FirebaseRegistrationService,
    private dataService: DataService
  ) {}

  ngOnInit() {}
  onSubmit(form: NgForm) {
    let value = form.value;
    this.fbrs.userLogin(value.userid, value.password);
    console.log('login component');
    this.dataService.testDataService().subscribe(() => {});
  }
  onClear(f) {
    f.reset();
  }
}
