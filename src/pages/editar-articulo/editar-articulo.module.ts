import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarArticuloPage } from './editar-articulo';

@NgModule({
  declarations: [
    EditarArticuloPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarArticuloPage),
  ],
})
export class EditarArticuloPageModule {}
