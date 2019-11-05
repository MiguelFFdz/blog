import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contactar',
  templateUrl: './contactar.component.html',
  styleUrls: ['./contactar.component.css']
})
export class ContactarComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Contactar');
  }

  ngOnInit() {
  }

}
