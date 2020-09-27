import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../services/collection.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuPrincipal: any[];

  constructor(private collectionService: CollectionService) {
  }

  ngOnInit() {
    this.collectionService.getItems('menu').subscribe(data => {
      this.menuPrincipal = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      }).filter(m=> m['activo']);
    });
  }

}
