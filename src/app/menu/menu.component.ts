import { Component, OnInit } from '@angular/core';
import { ColectionService } from '../services/colection.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuPrincipal: any[];

  constructor(private colectionService: ColectionService) {
  }

  ngOnInit() {
    this.colectionService.getItems('menu').subscribe(data => {
      this.menuPrincipal = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
    });
  }
}
