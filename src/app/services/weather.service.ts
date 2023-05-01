import { environments } from './../../environments/environments';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather, WeatherData } from '../models/Weather';

const url = 'http://api.openweathermap.org/data/2.5/weather?';
// const url = 'http://api.openweathermap.org/data/2.5/forecast?';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getData(): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      `${url}lat=-5.795&lon=-35.2094&APPID=${environments.API_KEY}&units=metric `
    );
  }
}
