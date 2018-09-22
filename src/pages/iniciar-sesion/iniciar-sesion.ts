import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-iniciar-sesion',
  templateUrl: 'iniciar-sesion.html',
})
export class IniciarSesionPage {

	formulario:any;

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		private usuarios: UsuariosProvider,
  		public alertCtrl: AlertController) {
  		this.formulario={
  			auth:{
  				email:"",
  				password:""
  			}
  		}
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad IniciarSesionPage');
  	}

  	iniciarSesion(){
  		this.usuarios.
  			iniciarSesion(this.formulario).
  			subscribe(respuesta=>{
  				localStorage.setItem("SessionToken",respuesta.jwt);
  				let alerta=this.alertCtrl.create({
  					title:"Bienvenido",
  					subTitle: "Inicio de sesión existoso!",
  					buttons: ['Ok']
  				});

  				alerta.present();

          this.navCtrl.setRoot(HomePage);
          this.navCtrl.popToRoot();

  			},error=>{
  				let alertaError=this.alertCtrl.create({
  					title: "Hubo un problema",
  					subTitle: "Porfavor intenta nuevamente",
  					buttons:['Ok']
  				});

  				alertaError.present();
  			});
  	}
}
