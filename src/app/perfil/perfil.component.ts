import { Component, OnInit } from '@angular/core';
import { RedSocial } from '../models/redSocial.model';
import { CollectionService } from '../services/collection.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  profile: any = {};
  profileAux: any[];
  redes: RedSocial[];

  constructor(private collectionService: CollectionService) {
  }

  ngOnInit() {
    this.collectionService.getItems('redesSociales').subscribe(data => {
      this.redes = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as RedSocial;
      });
    });

    this.collectionService.getItems('profile').subscribe(data => {
      this.profileAux = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
      this.profile = this.profileAux[0];
    });

  }

}
