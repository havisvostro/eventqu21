import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
/*import { AppPreferences } from '@ionic-native/app-preferences';*/
import { MyEventPage } from '../my-event/my-event';
import { ProfilePage } from '../profile/profile';
import { NotificationPage } from '../notification/notification';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  dashboardPage = DashboardPage;
  MyEventPage = MyEventPage;
  NotificationPage = NotificationPage;
  profilePage = ProfilePage;


  wishList: String;
  profile: String;
  id : any;
  isLogin: boolean;
   
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private toast: ToastController) {

    this.id = this.navParams.get('res');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
