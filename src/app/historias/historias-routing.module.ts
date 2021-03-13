import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HistoriaComponent } from './pages/historia/historia.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListarComponent } from './pages/listar/listar.component';

const routes: Routes = [

{
  path: '',
  children: [

    {
      path:'agregar',
      component:AgregarComponent
    },
    {
      path:'listar',
      component:ListarComponent
    },
    {
      path:':id',
      component:HistoriaComponent
    },
    {
      path: '**',
      redirectTo:'listar'
    }
  ]
}

]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class HistoriasRoutingModule { }
