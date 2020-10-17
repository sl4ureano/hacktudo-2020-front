import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat = -22.7978878;
  lng = -43.417863;
  zoom: number = 8;
  constructor() { }

  ngOnInit(): void {
  }

}
