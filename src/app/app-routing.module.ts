import { SobreComponent } from './componentes/sobre/sobre.component';
import { ReactiveFormsComponent } from './componentes/reactive-forms/reactive-forms.component';
import { ConsumirApiComponent } from './componentes/consumir-api/consumir-api.component';
import { DragAndDropComponent } from './componentes/drag-and-drop/drag-and-drop.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

    {   path: 'consumir-api',         component: ConsumirApiComponent     },
    {   path: 'drag-and-drop',        component: DragAndDropComponent     },
    {   path: 'reactive-forms',       component: ReactiveFormsComponent   },
    {   path: 'sobre',                component: SobreComponent           }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
