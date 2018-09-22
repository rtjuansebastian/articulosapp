import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-crear-cuenta',
  templateUrl: 'crear-cuenta.html',
})
export class CrearCuentaPage {

	formulario:any;

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		private usuarios: UsuariosProvider,
  		public alertCtrl: AlertController) {

  		this.formulario={
  			user:{
  				name:"",
  				email:"",
  				password:"",
  				password_confirmation:""
  			}
  		}
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad CrearCuentaPage');
  	}

  	crearCuenta(){
  		this.usuarios.
  			crearCuenta(this.formulario).
  			subscribe(respuesta=>{
  				let autenticacion={
  					auth:{
  						email: this.formulario.user.email,
  						password: this.formulario.user.password
  					}
  				}
  				this.usuarios.
  					iniciarSesion(autenticacion).
  					subscribe(respuesta=>{
  						localStorage.setItem("SessionToken",respuesta.jwt);
  						let alerta= this.alertCtrl.create({
  							title:"Bienvenido",
  							subTitle:"Inicio de sesion Exitoso!",
  							buttons:['Ok']
  						});
  						alerta.present();

  						this.navCtrl.setRoot(HomePage);
  						this.navCtrl.popToRoot();
  					},error=>{
  						let alerta=this.alertCtrl.create({
  							title:"Error",
  							subTitle:"No se ha podido iniciar Sesiòn",
  							buttons:['Ok']
  						});
  						alerta.present();
  					});
  			},error=>{
  				let alerta=this.alertCtrl.create({
  					title: "Error",
  					subTitle: "No se ha podido crear la cuenta",
  					buttons: ['Ok']
  				});
  				alerta.present();
  			});
  	}

}
