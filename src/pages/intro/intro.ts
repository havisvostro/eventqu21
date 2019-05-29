import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import {LoginPage} from '../login/login';
/**
 * Generated class for the GettingStartedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController, private modalCtrl : ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }
  goToLogin(){
     this.navCtrl.push(LoginPage);
  }

}
