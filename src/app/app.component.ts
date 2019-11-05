import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {RedSocial} from './models/redSocial.model';
import {ColectionService} from './services/colection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fecha: Date = new Date();
  profile: any = {};
  profileAux: any[];
  redes: RedSocial[];

  constructor(private titleService: Title, private colectionService: ColectionService) {
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
