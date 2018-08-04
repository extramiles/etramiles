import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class FirebaseRegistrationService {

  constructor() { }
  userRegistration(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
  }
  userLogin(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
      response => {
        console.log('user signed in');
        }
      )
      .catch(
        error => console.log(error)
      );
  }
}
