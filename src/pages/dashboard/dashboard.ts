import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import { RestProvider } from '../../providers/rest/rest';
import { DetailEventPage } from '../detail-event/detail-event';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  id: any;
  idLike: any;
  text: string;
  events :any;
  passingId: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController ,public http:HttpClient,public restProvider :RestProvider,public modalCtrl : ModalController) {
  this.getEvents();
  }

  getEvents(){
    this.restProvider.getEvents().then(data=>{
      this.events = data; 
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
    this.passingId = this.navParams.get('data');
  }

  goToDetailEvent(id){
    this.navCtrl.push(DetailEventPage,{eventId: id});
  }
  
  discussButton(){
    console.log("discuss button pressed");
  }

  
  shareButton(){
    console.log("share button pressed");
  }

}
