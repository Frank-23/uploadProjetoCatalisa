import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GerenciarCovidService } from './servicos/gerenciar-covid.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsumirApiComponent } from './componentes/consumir-api/consumir-api.component';
import { DragAndDropComponent } from './componentes/drag-and-drop/drag-and-drop.component';
import { ReactiveFormsComponent } from './componentes/reactive-forms/reactive-forms.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConsumirApiComponent,
    DragAndDropComponent,
    ReactiveFormsComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GerenciarCovidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
