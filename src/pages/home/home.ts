import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { DibujoPage } from '../dibujo/dibujo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
Historia = HistoriaPage;
Dibujo = DibujoPage;
  constructor(public navCtrl: NavController) {

  }
  clickHistoria()
  {
    this.navCtrl.push(this.Historia)
  }
  clickDibujo()
  {
    this.navCtrl.push(this.Dibujo)
  }
}
