import { Component, OnInit, Input } from '@angular/core';
import { CityService } from 'src/app/core/service/city/city.service';
import { City } from 'src/app/shared/model/city';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() city: City;

  constructor() { }

  ngOnInit() {
  }

}
