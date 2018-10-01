import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoriaPage } from '../historia/historia';
import { DibujoPage } from '../dibujo/dibujo';
import { PyEPage } from '../py-e/py-e';
import { SaludPage } from '../salud/salud';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
Historia = HistoriaPage;
Dibujo = DibujoPage;
PyE = PyEPage;
Salud = SaludPage;
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
  clickPyE()
  {
    this.navCtrl.push(this.PyE)
  }
  clickSalud()
  {
    this.navCtrl.push(this.Salud)
  }
}
