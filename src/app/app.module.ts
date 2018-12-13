import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewPage } from '../pages/new/new';
import { InicioPage } from '../pages/inicio/inicio';
import { RegisterPage } from '../pages/register/register';
import {IonicStorageModule} from "@ionic/storage";
import { ProductoPage } from '../pages/producto/producto';
import { RegPage } from '../pages/reg/reg';
import { AppPage } from '../pages/app/app';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewPage,
    InicioPage,
    RegisterPage,
    ProductoPage,
    RegPage,
    AppPage
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewPage,
    InicioPage,
    RegisterPage,
    ProductoPage,
    RegPage,
    AppPage

    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
