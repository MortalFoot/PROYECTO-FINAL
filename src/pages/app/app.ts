import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewPageModule } from '../new/new.module';
import { ProductoPage } from '../producto/producto';
import { NewPage } from '../new/new';

/**
 * Generated class for the AppPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-app',
  templateUrl: 'app.html',
})
export class AppPage {
  
  carrito = [];
  prod = ProductoPage;
  car = NewPage;

  Productos = [
    {id: 0,color: "white", Producto: "Zapatos de Futbol",precio: "$1500", Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4, 5],imagen: "../assets/imgs/ZapatosdeFutbol.jpg", numero: "(871) 178 5027", resena: [{usuario:"Daniel de la Torre", fecha: "07/12/2018",  avatar: "../assets/imgs/Hafro.png", texto: "Estos Zapatos son los de Dybala, estan muy buenos"}]},
    {id: 1,color: "white", Producto: "Camisa Deportiva",precio: "$600",Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4 ],imagen: "../assets/imgs/Camisa.jpg", numero: "(871) 178 5027", resena: [{usuario:"Daniel de la Torre", fecha: "07/12/2018",  avatar: "../assets/imgs/Hafro.png", texto: "Esta Camisa Esta muy bien para entrenar"}]},
    {id: 2,color: "white", Producto: "Mochila deportiva",precio: "$500",Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3,],imagen: "../assets/imgs/Mochila.jfif", numero: "(871) 178 5027", resena: [{usuario:"Daniel de la Torre", fecha: "07/12/2018",  avatar: "../assets/imgs/Hafro.png", texto: "Esta mochila esta espaciosa y aparte es de Dragon Ball"}]},
    {id: 3,color: "white", Producto: "Espinilleras",precio: "$200",Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4, 5],imagen: "../assets/imgs/Espinilleras.jpg", numero: "(871) 178 5027", resena: [{usuario:"Daniel de la Torre", fecha: "07/12/2018",  avatar: "../assets/imgs/Hafro.png", texto: "Estas espinilleras estan muy caras"}]},
    {id: 4,color: "white", Producto: "Balon de Americano",precio: "$1500", Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4, 5],imagen: "../assets/imgs/Americano.jpg", numero: "(871) 178 5027", resena: [{usuario:"Daniel de la Torre", fecha: "07/12/2018",  avatar: "../assets/imgs/Hafro.png", texto: "Este balon de futbol americano me gusto por que dura mucho"}]},
    {id: 5,color: "white", Producto: "Balon de Futbol",precio: "$600",Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4 ],imagen: "../assets/imgs/Balon.jpg", numero: "(871) 178 5027", resena: [{usuario:"Daniel de la Torre", fecha: "07/12/2018",  avatar: "../assets/imgs/Hafro.png", texto: "Este balon de futbol  me gusto por la marca"}]},
    {id: 6,color: "white", Producto: "Costal de Box",precio: "$500",Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3,],imagen: "../assets/imgs/Costal.jpg", numero: "(871) 178 5027", resena: [{usuario:"Daniel de la Torre", fecha: "07/12/2018",  avatar: "../assets/imgs/Hafro.png", texto: "Este Costal de box esta muy grande"}]},
    {id: 7,color: "white", Producto: "Electrolit",precio: "$200",Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4, 5],imagen: "../assets/imgs/Electrolit.jpg", numero: "(871) 178 5027", resena: [{usuario:"Daniel de la Torre", fecha: "07/12/2018",  avatar: "../assets/imgs/Hafro.png", texto: "Me gusta el Electrolit"}]},
    {id: 8,color: "white", Producto: "Gatorade 1 Litro",precio: "$1500", Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4, 5],imagen: "../assets/imgs/G1L.jpg", numero: "(871) 178 5027", resena: [{usuario:"Daniel de la Torre", fecha: "07/12/2018",  avatar: "../assets/imgs/Hafro.png", texto: "Prefiero el Gatorade chico"}]},
    {id: 9,color: "white", Producto: "Gatorade 500 Mililitros",precio: "$600",Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4 ],imagen: "../assets/imgs/G750ml.jpg", numero: "(871) 178 5027", resena: [{usuario:"Daniel de la Torre", fecha: "07/12/2018",  avatar: "../assets/imgs/Hafro.png", texto: "Siempre no, me gusta mas el grande"}]},
    {id: 10,color: "white", Producto: "Gorra Deportiva",precio: "$500",Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3,],imagen: "../assets/imgs/Gorra.jpg", numero: "(871) 178 5027", resena: [{usuario:"Daniel de la Torre", fecha: "07/12/2018",  avatar: "../assets/imgs/Hafro.png", texto: "Esta Gorra esta comoda para entrenar"}]},
    {id: 11,color: "white", Producto: "Guante de Beisbol",precio: "$200",Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4, 5],imagen: "../assets/imgs/Guante.jpg", numero: "(871) 178 5027", resena: [{usuario:"Daniel de la Torre", fecha: "07/12/2018",  avatar: "../assets/imgs/Hafro.png", texto: "¿Tiene Autografo?"}]},
    {id: 12,color: "white", Producto: "Guantes de Box",precio: "$1500", Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4, 5],imagen: "../assets/imgs/GuantesBox.jpg", numero: "(871) 178 5027", resena: [{usuario:"Daniel de la Torre", fecha: "07/12/2018",  avatar: "../assets/imgs/Hafro.png", texto: "Para ponerte unos buenos..."}]},
    {id: 13,color: "white", Producto: "Guantes de Portero",precio: "$600",Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4 ],imagen: "../assets/imgs/Guantes.jfif", numero: "(871) 178 5027", resena: [{usuario:"Daniel de la Torre", fecha: "07/12/2018",  avatar: "../assets/imgs/Hafro.png", texto: "Para protegerte de los buenos..."}]},
    {id: 14,color: "white", Producto: "Lentes",precio: "$500",Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3,],imagen: "../assets/imgs/Lentes.jpg", numero: "(871) 178 5027", resena: [{usuario:"Daniel de la Torre", fecha: "07/12/2018",  avatar: "../assets/imgs/Hafro.png", texto: "Me gusta el diseño"}]},
    {id: 15,color: "white", Producto: "Medias Deportivas",precio: "$200",Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4, 5],imagen: "../assets/imgs/Medias.jpg", numero: "(871) 178 5027", resena: [{usuario:"Daniel de la Torre", fecha: "07/12/2018",  avatar: "../assets/imgs/Hafro.png", texto: "Estas medias no me gustaron"}]},
    {id: 16,color: "white", Producto: "Pelota de beisbol",precio: "$1500", Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4, 5],imagen: "../assets/imgs/PelotaBeisbol.jfif", numero: "(871) 178 5027", resena: [{usuario:"Daniel de la Torre", fecha: "07/12/2018",  avatar: "../assets/imgs/Hafro.png", texto: "Para las retas de beis"}]},
    {id: 17,color: "white", Producto: "Porterias",precio: "$600",Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4 ],imagen: "../assets/imgs/Porterias.jpg", numero: "(871) 178 5027", resena: [{usuario:"Daniel de la Torre", fecha: "07/12/2018",  avatar: "../assets/imgs/Hafro.png", texto: "Para que entrenes que falta te hace"}]},
    {id: 18,color: "white", Producto: "Visera",precio: "$500",Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3,],imagen: "../assets/imgs/Visera.jfif", numero: "(871) 178 5027", resena: [{usuario:"Daniel de la Torre", fecha: "07/12/2018",  avatar: "../assets/imgs/Hafro.png", texto: "Pa la Calors"}]},
    {id: 19,color: "white", Producto: "Raqueta Wilson",precio: "$200",Vendedor: "Edson Gonzalez",valoracion: [1, 2, 3, 4, 5],imagen: "../assets/imgs/Wilson.jpg", numero: "(871) 178 5027", resena: [{usuario:"Daniel de la Torre", fecha: "07/12/2018",  avatar: "../assets/imgs/Hafro.png", texto: "Esta chida"}]},
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  clickProducto(p){
    this.navCtrl.push(this.prod, {producto: p, carrito: this.carrito});
  }

  Carrito(){
    this.navCtrl.push(this.car, {carrito: this.carrito});
  }

}
