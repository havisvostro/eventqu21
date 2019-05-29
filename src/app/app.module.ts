import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
//import { AppPreferences } from '@ionic-native/app-preferences';
import { RestProvider } from '../providers/rest/rest';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IntroPage } from '../pages/intro/intro';
import { LoginPage} from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { RegisterPage } from '../pages/register/register';
import { NotificationPage } from '../pages/notification/notification';
import {MyEventPage} from '../pages/my-event/my-event';
import {TabsPage} from '../pages/tabs/tabs';
import {ProfilePage} from '../pages/profile/profile';
import { DetailEventPage } from '../pages/detail-event/detail-event';


import { LaunchNavigator } from '@ionic-native/launch-navigator';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IntroPage,
    LoginPage,
    ProfilePage,
    DashboardPage,
    RegisterPage,
    NotificationPage,
    MyEventPage,
    TabsPage,
    DetailEventPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IntroPage,
    ProfilePage,
    LoginPage,  
    DashboardPage,
    RegisterPage,
    NotificationPage,
    MyEventPage,
    TabsPage,
    DetailEventPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LaunchNavigator,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  //AppPreferences,
  RestProvider,
  ]
})
export class AppModule {}
