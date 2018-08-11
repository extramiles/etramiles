import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  result;
  constructor(private httpClient: HttpClient) {}

  testDataService() {
    console.log('data service works');
    return this.httpClient
      .get('/testDataService')
      .map(result => (this.result = 'result.json().data'));
  }

  testDataService1() {
    console.log('data service works');
    return this.httpClient
      .get('/testDataService')
      .map(result => (this.result = 'result.json().data'));
  }
}
