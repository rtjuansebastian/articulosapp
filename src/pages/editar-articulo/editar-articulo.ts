import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArticulosProvider } from '../../providers/articulos/articulos';
import { TraerArticulosPage } from '../traer-articulos/traer-articulos';


@IonicPage()
@Component({
  selector: 'page-editar-articulo',
  templateUrl: 'editar-articulo.html',
})
export class EditarArticuloPage {

	idArticulo:number;
	articulo:any;

  	constructor(
  		public navCtrl: NavController, 
  		public navParams: NavParams,
  		private articulosServicio:ArticulosProvider) {

  		this.idArticulo=this.navParams.get('id');
  		this.articulo={
  			titulo:"",
  			contenido:""
  		}
  	}

  	ionViewDidLoad() {
    	this.articulosServicio.
    		mostrarArticulo(this.idArticulo).
    		subscribe(respuesta=>{
    			this.articulo=respuesta;
    		},error=>{});
	}

	editarArticulo(){
		this.articulosServicio.
			modificarArticulo(this.articulo).
			subscribe(respuesta=>{
				this.navCtrl.setRoot(TraerArticulosPage);
				this.navCtrl.popToRoot();
			},error=>{});
	}

}
