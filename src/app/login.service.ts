import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public authModule: AngularFireAuth) { }


  login(email, password){
	return this.authModule.auth.signInWithEmailAndPassword(email, password);
  }

  logout(){
  	return this.authModule.auth.signOut();
  }

  createUser(email, password){
  	return this.authModule.auth.createUserWithEmailAndPassword(email, password);
  }
}

