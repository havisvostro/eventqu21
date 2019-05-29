import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import 'rxjs/add/operator/map';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {TabsPage} from '../tabs/tabs'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  passwordShownLogIn = false;
  passwordTypeLogIn = 'password';
 
authToken: any;

 constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient, private toastCtrl : ToastController) {
  }
    tooglePasswordLogIn(){
    if(this.passwordShownLogIn){
      this.passwordShownLogIn = false;
      this.passwordTypeLogIn = 'password';
    }
    else{
      this.passwordShownLogIn = true;
      this.passwordTypeLogIn = 'text';
    }
  }

   checkLogin(form: NgForm){
    let data = {
      email : form.value.email,
      passwd1 : form.value.passwd1
    };

    this.http.post('https://eventqu21.herokuapp.com/checkLogin', data).subscribe((response: string) => {
      console.log('POST Response:' + response);
     response);
      this.toastCtrl.create({message: "Login berhasil!", duration: 2000}).present();
      this.navCtrl.push(TabsPage,{res : response});
      console.log(response)
    }, (err)=> {
      this.toastCtrl.create({message: "Email atau password salah.", duration: 2000}).present();
    });
  }
  register() {
    this.navCtrl.push(RegisterPage);
  }

}
