import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  result;
  token;
  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string) {
    console.log('data service works');
    return this.httpClient
      .post('/login', {
        userid: email,
        password: password
      })
      .map(result => {
        this.result = result;
        this.token = this.result.data.token;
        console.log(this.token);
      });
  }

  registerUser(email: string, password: string) {
    console.log('email');
    return this.httpClient.post('/registration', {
      userid: email,
      password: password
    });
  }
}
