import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Evento } from '../models/evento.model';
import { CollectionService } from '../services/collection.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudios: Evento[];
  constructor(private titleService: Title, private collectionService: CollectionService) {
    this.titleService.setTitle('Estudios');
  }

  ngOnInit() {
    this.collectionService.getItems('studies').subscribe(data => {
      this.estudios = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Evento;
      });
    });
  }

}
