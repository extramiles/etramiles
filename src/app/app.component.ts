import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyC6vZIWY0UGQW-6AfIfK12gKUJ7IM42IUA",
      authDomain: "extramiles-8ff2b.firebaseapp.com"
    });
  }
}
