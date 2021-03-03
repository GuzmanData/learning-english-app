import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriaComponent } from './pages/historia/historia.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListarComponent } from './pages/listar/listar.component';
import { HistoriasRoutingModule } from './historias-routing.module';



@NgModule({
  declarations: [HistoriaComponent, AgregarComponent, ListarComponent],
  imports: [
    CommonModule,
     HistoriasRoutingModule
  ]
})
export class HistoriasModule { }
