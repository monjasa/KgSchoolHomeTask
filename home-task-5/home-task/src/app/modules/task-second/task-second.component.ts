import { Component, OnInit } from '@angular/core';
import { City } from '../../core/models/City';
import { Constants } from '../../../constants/constants';

@Component({
  selector: 'app-task-second',
  templateUrl: './task-second.component.html',
  styleUrls: ['./task-second.component.scss'],
})
export class TaskSecondComponent {

  cities?: City[];

  loadCities() {
    this.cities = Constants.CITIES_DATA as City[];
  }

  trackCityById(index: number, city: City): number {
    return city.id;
  }
}
