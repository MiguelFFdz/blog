import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Evento} from '../models/evento.model';
import { CollectionService } from '../services/collection.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  trabajos: Evento[];
  constructor(private titleService: Title, private collectionService: CollectionService) {
    this.titleService.setTitle('Experiencia Laboral');
  }

  ngOnInit() {
    this.collectionService.getItems('jobs').subscribe(data => {
      this.trabajos = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Evento;
      });
    });
  }

}
