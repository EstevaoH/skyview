import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from 'src/environments/environments';
import { AirPollution } from '../models/AirPollution';

const url = 'http://api.openweathermap.org/data/2.5/air_pollution?';
@Injectable({
  providedIn: 'root',
})
export class AirPollutionService {
  constructor(public http: HttpClient) {}

  airPollutionData(): Observable<AirPollution> {
    return this.http.get<AirPollution>(
      `${url}lat=-5.795&lon=-35.2094&APPID=${environments.API_KEY} `
    );
  }
}
