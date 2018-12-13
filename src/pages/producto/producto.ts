import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {

producto;
carrito = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.producto = this.navParams.get("producto");
    this.carrito = this.navParams.get("carrito");

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoPage');
  }

  clickCarrito(){
    this.carrito.push(this.producto);
    this.navCtrl.pop();

  }

}
