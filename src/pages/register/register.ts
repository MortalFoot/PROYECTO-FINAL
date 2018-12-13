import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Storage} from '@ionic/storage';



@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  usuario = [];
  usuarios = '';
  password = '';
  mail = '';


  constructor(public navCtrl: NavController, 
    public storage: Storage, 
    public alertCtrl: AlertController,
    public navParams: NavParams ) {
    
    this.usuario = this.navParams.get('usuarios'); 
    console.log(this.usuario);

   
  }

  clickAgregar()
  {
     if(this.password.length > 7 )
    {
       this.usuario.push({ 
        password: this.password , mail: this.mail });
        this.usuarios = '';

        this.storage.set('usuario', JSON.stringify(this.usuario));
      
        const alert = this.alertCtrl.create({
          title: 'Valido',
          subTitle: 'Usuario creado',
          buttons: ['OK']
        })
        alert.present();

        this.navCtrl.pop();

    }
    else 
    {
      const alert = this.alertCtrl.create({
        title: 'Invalido',
        subTitle: 'La contraseña debe tener al menos 8 caracteres',
        buttons: ['OK']
      })
      alert.present();
    }
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }



}
