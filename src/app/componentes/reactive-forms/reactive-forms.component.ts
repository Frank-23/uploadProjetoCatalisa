import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
    public resultado: any;

    painelCovid = new FormGroup({
        estado: new FormControl(''),
        uf: new FormControl(''),
        casos: new FormControl('0'),
        mortes: new FormControl('0'),
        suspeitos: new FormControl('0'),
        recuperados: new FormControl('0')
  });
  constructor() { }

  ngOnInit(): void {}

  public obterDadosFormulario(): void {
      this.resultado = this.painelCovid.value;
  }
}
