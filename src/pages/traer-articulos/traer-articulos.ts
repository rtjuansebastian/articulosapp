import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ArticulosProvider } from '../../providers/articulos/articulos';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';

@IonicPage()
@Component({
  selector: 'page-traer-articulos',
  templateUrl: 'traer-articulos.html',
})
export class TraerArticulosPage {

	articulos:Array<any>;

	constructor(
	  	public navCtrl: NavController, 
	  	public navParams: NavParams,
	  	private articulosServicio: ArticulosProvider,
	  	public alertCtrl: AlertController,
	  	private usuarios:UsuariosProvider
	  	) {

	  	this.articulos=[
	  		{titulo:"",contenido:""}
	  	]
	}

	ionViewCanEnter(){
		return this.usuarios.validarSesion();
	}

	ionViewDidLoad() {
	    this.articulosServicio.
	    	traerArticulos().
	    	subscribe(respuesta=>{
	    		this.articulos=respuesta;
	    	},error=>{
	    		let alerta= this.alertCtrl.create({
	    			title:"Error!",
	    			subTitle:"No se pudieron obtener los datos",
	    			buttons:['Ok']
	    		});

	    		alerta.present();
	    	});
	}

	verArticulo(id){
		this.navCtrl.push('VerArticuloPage',{id:id})
	}

	irA(pagina){
		this.navCtrl.push(pagina);
	}

}
