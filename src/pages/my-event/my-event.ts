import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController, ModalController } from 'ionic-angular';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import { RestProvider } from '../../providers/rest/rest';


/**
 * Generated class for the MyEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-event',
  templateUrl: 'my-event.html',
})
export class MyEventPage {
  id : any;
  events : any;
  response : any;
  lat : number;
  lng:number;
  destination:string;
  start:string;
  address : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http : HttpClient) {
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyEventPage');
  }

}
