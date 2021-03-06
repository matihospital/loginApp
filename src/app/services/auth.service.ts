import { Injectable } from '@angular/core';
import { AngularFireAuth} from "angularfire2/auth";
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {  }

  signIn(email: string, pass: string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email,pass)
        .then( userData => resolve(userData), err => reject(err));
    });
  }

  logIn(email:string, pass:string){
    return new Promise( (resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email,pass)
        .then( userData => resolve(userData), err => reject(err));
    });
  }

  logOut(){
    return this.afAuth.auth.signOut();
  }

  getAuth(){
    return this.afAuth.authState.map (auth => auth);
  }

  loginGoogle(){
    return this.afAuth.auth.signInWithPopup( new firebase.auth.GoogleAuthProvider())
  }

  loginFacebook(){
    return this.afAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider())
  }

  loginTwitter(){
    return this.afAuth.auth.signInWithPopup( new firebase.auth.TwitterAuthProvider())
  }
}
