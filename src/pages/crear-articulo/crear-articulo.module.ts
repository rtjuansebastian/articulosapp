import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearArticuloPage } from './crear-articulo';

@NgModule({
  declarations: [
    CrearArticuloPage,
  ],
  imports: [
    IonicPageModule.forChild(CrearArticuloPage),
  ],
})
export class CrearArticuloPageModule {}
