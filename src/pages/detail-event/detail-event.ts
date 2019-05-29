import { Component } from '@angular/core';
import { NavController, NavParams, Platform, PopoverController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
// import { PopOverNotificationsPage } from '../pop-over-notifications/pop-over-notifications';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import {MyEventPage} from '../my-event/my-event'

@Component({
  selector: 'page-detail-event',
  templateUrl: 'detail-event.html',
})
export class DetailEventPage{
  id : any;
  events : any;
  response : any;
  lat : number;
  lng:number;
  destination:string;
  start:string;
  address : any;

  constructor(private launchNavigator: LaunchNavigator, public navCtrl: NavController, public navParams: NavParams,  private plt: Platform, public popoverCtrl: PopoverController, public http : HttpClient) {
  	this.id = this.navParams.get('eventId');
  	this.getDetailEvent();
  }
    
  getDetailEvent() {
  	new Promise((resolve, reject) => {
  		this.http.get('https://eventqu21.herokuapp.com' + '/getOneData' + '/'+ this.id).subscribe(response =>{
	      resolve(response);
	  	}, (err) => {
	  		reject(err);
	  	});
  	}).then(data => { 
  		this.events = data;  
  		this.lat = parseFloat(this.events.latitude);
  		this.lng = parseFloat(this.events.longitude);		
		
  	});
  }

   navme(address){
   	console.log(address);

   	this.launchNavigator.navigate(address);
   }




  registerEvent(id){
    this.navCtrl.push(MyEventPage,{eventId: id});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailEventPage');
  }

 
}