import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ArticulosProvider } from '../../providers/articulos/articulos';
import {TraerArticulosPage} from '../traer-articulos/traer-articulos';

@IonicPage()
@Component({
  selector: 'page-ver-articulo',
  templateUrl: 'ver-articulo.html',
})
export class VerArticuloPage {

	idArticulo:number;
	articulo:any;

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		private articulosServicio:ArticulosProvider,
  		public alertCtrl:AlertController) {

  		this.articulo={
  			titulo:"",
  			contenido:""
  		}

  		this.idArticulo=this.navParams.get('id');
  	}

  	ionViewDidLoad() {
    	this.articulosServicio.
    		mostrarArticulo(this.idArticulo).
    		subscribe(respuesta=>{
    			this.articulo=respuesta;
    		},error=>{});
  	}

  	eliminarArticulo(){
  		let alerta= this.alertCtrl.create({
  			title:"Estas seguro?",
  			subTitle:"Quierers eliminar el articulo?",
  			buttons:[
  			{
  				text:"Cancelar",
  				handler:data=>{

  				}
  			},{
  				text:"Eliminar",
  				handler:data=>{
  					this.articulosServicio.
		  			eliminarArticulo(this.idArticulo).
		  			subscribe(respuesta=>{
		  				this.navCtrl.setRoot(TraerArticulosPage);
		  				this.navCtrl.popToRoot();
		  			},error=>{});
  				}
  			}]
  		});
  		alerta.present();
  	}

  	irA(pagina){
  		this.navCtrl.push(pagina,{id:this.idArticulo});
  	}

}
