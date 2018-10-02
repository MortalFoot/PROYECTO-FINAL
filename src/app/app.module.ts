import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoriaPage } from '../pages/historia/historia';
import { DibujoPage } from '../pages/dibujo/dibujo';
import { PyEPage } from '../pages/py-e/py-e';
import { SaludPage } from '../pages/salud/salud';
import { PApPsPage } from '../pages/p-ap-ps/p-ap-ps';
import { ComPage } from '../pages/com/com';
import { MiPage } from '../pages/mi/mi';
import { RoboticaPage } from '../pages/robotica/robotica';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoriaPage,
    DibujoPage,
    PyEPage,
    SaludPage,
    PApPsPage,
    ComPage,
    MiPage,
    RoboticaPage
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoriaPage,
    DibujoPage,
    PyEPage,
    SaludPage,
    PApPsPage,
    ComPage,
    MiPage,
    RoboticaPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
