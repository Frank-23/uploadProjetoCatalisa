import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {

  public arrayCursos: Array<string> = [];

  constructor() {

      this.arrayCursos = [' Curso I - Linguagem Java',  'Curso II - Programação Orientada a Objetos',
                          'Curso III - TypeScrit',      'Curso IV - HTML',        'Curso V - CSS',
                          'Curso VI - JavaScript',       'Curso VII - Angular'];
  }

  ngOnInit(): void {}

  public movimentar(event: CdkDragDrop<string[]>): void {
      moveItemInArray(this.arrayCursos, event.previousIndex, event.currentIndex);
  }

}
