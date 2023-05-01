import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/Weather';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-temperature-now',
  templateUrl: './temperature-now.component.html',
  styleUrls: ['./temperature-now.component.css'],
})
export class TemperatureNowComponent implements OnInit {
  forecast = {} as WeatherData;
  temperatureRound: any;

  constructor(private weatherService: WeatherService) {
    // this.forecast = new WeatherData()
  }

  ngOnInit(): void {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getData().subscribe({
      next: (res) => {
       this.forecast = res
        console.log(this.forecast);
      },
    });
  }
}
