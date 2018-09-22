import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the ArticulosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ArticulosProvider {
	
	url:string;
	encabezados:any;

  	constructor(private http:HttpClient) { 
  		this.url="https://apidocumentospiensadigital.herokuapp.com/articulos";
  		this.encabezados={
  			headers: new HttpHeaders({
  				'Content-Type':'application/json',
  				'Authorization': 'Bearer ' + localStorage.getItem("SessionToken")
  			})
  		};
  	}

  	/*GET index*/
  	traerArticulos():Observable<any>{
  		return this.http.get<any>(this.url,this.encabezados);
  	}

  	/*GET show*/
  	mostrarArticulo(id):Observable<any>{
      return this.http.get<any>(this.url+'/'+id,this.encabezados);
  	}

  	/*POST create*/
  	crearArticulo(articulo):Observable<any>{
      let params= JSON.stringify(articulo);
      return this.http.post<any>(this.url,params,this.encabezados);
  	}

  	/*PUT update*/
  	modificarArticulo(articulo):Observable<any>{
      let params= JSON.stringify(articulo);
      return this.http.
        put<any>(this.url+"/"+articulo.id, params, this.encabezados);
  	}

  	/*DELETE destroy*/
  	eliminarArticulo(id):Observable<any>{
      let urlArticulo=this.url+"/"+id;
      return this.http.delete<any>(urlArticulo,this.encabezados);
  	}

}
