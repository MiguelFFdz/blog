import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {CollectionService} from '../services/collection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  profile: any = {};
  profileAux: any[];
  constructor(private titleService: Title, private collectionService: CollectionService) {
    this.titleService.setTitle('Inicio');
  }

  ngOnInit() {
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
