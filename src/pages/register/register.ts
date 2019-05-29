import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ToastController} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  passwordShownSignUp = false;
  passwordTypeSignUp = 'password';
   user: any = {};
   authToken: any;
  signUpLogIn : String;
constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private toastCtrl : ToastController) {
    this.signUpLogIn = "signUp";
  }

  tooglePasswordSignUp(){
    if(this.passwordShownSignUp){
      this.passwordShownSignUp = false;
      this.passwordTypeSignUp = 'password';
    }
    else{
      this.passwordShownSignUp = true;
      this.passwordTypeSignUp = 'text';
    }
  }

  
  signUp(form: NgForm){
    let data = {
      name : form.value.name,
      email : form.value.email,
      tanggalLahir : form.value.tanggalLahir,
      passwd1 : form.value.passwd1
    };

    this.http.post('https://eventqu21.herokuapp.com/signUp', data).subscribe(response =>{console.log('POST Response:',response);
      console.log('registered');
    });
    this.navCtrl.push(LoginPage);
}
}
