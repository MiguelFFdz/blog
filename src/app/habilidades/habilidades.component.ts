import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {ColectionService} from '../services/colection.service';
import {forEachToken} from 'tslint';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  skills: any = {};
  colors: string[] = ['success', 'secondary', 'danger', 'warning', 'muted'];
  indice: string[] = ['Lenguaje', 'Framework', 'BBDD', 'Otros'];

  constructor(private titleService: Title, private colectionService: ColectionService) {
    this.titleService.setTitle('Habilidades');
  }

  ngOnInit() {
    this.colectionService.getItems('skills').subscribe(data => {
      this.skills = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
      this.skills.map((item, i) => {
        console.log(this.colors[this.indice.indexOf(item.type)]);
        item.color = this.colors[this.indice.indexOf(item.type)];
        console.log(item);
      });
    });
  }
}
