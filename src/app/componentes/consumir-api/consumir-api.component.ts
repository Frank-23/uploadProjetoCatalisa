import { Estado } from './../../modelo/api.models';
import { GerenciarCovidService } from './../../servicos/gerenciar-covid.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consumir-api',
  templateUrl: './consumir-api.component.html',
  styleUrls: ['./consumir-api.component.css']
})
export class ConsumirApiComponent implements OnInit {

  public estados: any;

  constructor(private servico: GerenciarCovidService) { }

  ngOnInit(): void { this.exibirEstados();  }

  public exibirEstados(): void {
      this.servico.listarEstados().subscribe(
          ( resposta: any )  => {
              this.estados = resposta;
          },
          ( erro: any ) => {
              console.error(erro);
          }
      );
  }
}
