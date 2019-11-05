import { Component, OnInit } from '@angular/core';
import { RedSocial } from '../models/redSocial.model';
import { ColectionService } from '../services/colection.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  profile: any = {};
  profileAux: any[];
  redes: RedSocial[];

  constructor(private colectionService: ColectionService) {
  }

  ngOnInit() {
    this.colectionService.getItems('redesSociales').subscribe(data => {
      this.redes = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as RedSocial;
      });
    });

    this.colectionService.getItems('profile').subscribe(data => {
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
