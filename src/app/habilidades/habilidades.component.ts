import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CollectionService } from '../services/collection.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  skills: any = {};
  colors: string[] = ['success', 'secondary', 'danger', 'warning', 'muted'];
  indice: string[] = ['Lenguaje', 'Framework', 'BBDD', 'Otros'];

  constructor(private titleService: Title, private collectionService: CollectionService) {
    this.titleService.setTitle('Habilidades');
  }

  ngOnInit() {
    this.collectionService.getItems('skills').subscribe(data => {
      this.skills = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
      this.skills.map((item, i) => {
        item.color = this.colors[this.indice.indexOf(item.type)];
      });
    });
  }
}
