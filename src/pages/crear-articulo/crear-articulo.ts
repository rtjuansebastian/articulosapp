import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ArticulosProvider } from '../../providers/articulos/articulos';
import { VerArticuloPage} from '../ver-articulo/ver-articulo';
/**
 * Generated class for the CrearArticuloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crear-articulo',
  templateUrl: 'crear-articulo.html',
})
export class CrearArticuloPage {

	articulo:any;

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		private articulos:ArticulosProvider,
  		public alertCtrl:AlertController) {

  		this.articulo={
  			titulo:"",
  			contenido:""
  		}
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad CrearArticuloPage');
  	}

  	crearArticulo(){
  		this.articulos.
  			crearArticulo(this.articulo).
  			subscribe(respuesta=>{
  				this.navCtrl.setRoot(VerArticuloPage,{id:respuesta.id});
  				this.navCtrl.popToRoot();
  			},error=>{
  				let alerta=this.alertCtrl.create({
  					title:"Error",
  					subTitle:"No se pudo crear el articulo.",
  					buttons:['Ok']
  				});

  				alerta.present();
  			});
  	}

}
