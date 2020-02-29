import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/core/service/weather/weather.service';
import { CurrentWeather } from 'src/app/shared/model/Weather';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit, OnDestroy {
  private routeSub: Subscription;

  weather: CurrentWeather;
  cityid: number;
  weatherSubscription: Subscription

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.cityid = -1;
    this.weather = null;

    // extract id from url
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.cityid = params['id'];
    });

    this.getWeather();
  }

  ngOnDestroy() {
    if (this.weatherSubscription) {
      this.weatherSubscription.unsubscribe();
    }
  }

  getWeather() {
    this.weatherSubscription = this.weatherService.getWeatherByCityid(this.cityid)
      // .subscribe(result => { this.weather = result; console.log(this.weather) });
      .subscribe(w => {
        this.weather = w;
        console.log("result w:");
        console.log(this.weather);
      });
  }

}
