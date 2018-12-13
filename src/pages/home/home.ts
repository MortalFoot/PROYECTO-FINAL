import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { NewPage } from '../new/new';
import {Storage} from '@ionic/storage';
import { ProductoPage } from '../producto/producto';
import { AppPage } from '../app/app';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 

  registro = RegisterPage;
  alv = RegisterPage;
  Mike = AppPage;


  usuario = [];
  usuarios = '';
  password = '';
  mail = '';

  constructor(public navCtrl: NavController, public storage: Storage, public alertCtrl: AlertController
    ) {

     this.storage.keys()
     .then(keys => {
       if (keys.some(key => key == 'usuario')){

        this.storage.get('usuario')
        .then(usuario => {
          console.log(usuario);
          this.usuario = JSON.parse(usuario);
          console.log(usuario);
        }
        );
       }
     });
  // this.storage.clear();
  }

  clickRegistro(){
    console.log(this.usuario);
    this.navCtrl.push(this.registro, {usuarios: this.usuario});

   

  }

  clickALV(){
   
    this.navCtrl.push(this.alv);

  }

  clickALV2(){

   let index = this.usuario.findIndex(u => u.mail == this.mail && u.password == this.password);
    
   if(index >= 0){
   const alert = this.alertCtrl.create({
    title: 'Usuario encontrado',
    subTitle: '',
    buttons: ['OK']
  })
  alert.present();

  this.navCtrl.push(this.Mike);

  
} 
  
else 
{
  const alert = this.alertCtrl.create({
    title: 'Invalido',
    subTitle: '',
    buttons: ['OK']
  })
  alert.present();
}

  }

}


