import { Component, OnInit } from '@angular/core';
import { AirPollution } from 'src/app/models/AirPollution';
import { AirPollutionService } from 'src/app/services/air-pollution.service';

let type: '1' | '2' | '3' | ' 4' | '5';

@Component({
  selector: 'app-air-quality',
  templateUrl: './air-quality.component.html',
  styleUrls: ['./air-quality.component.css'],
})
export class AirQualityComponent implements OnInit {
  airPollution!: AirPollution;
  typeQuality!: number
  quality!: string;

  constructor(private airPollutionService: AirPollutionService) {
    // this.airPollution = new AirPollution();
  }

  ngOnInit(): void {
    this.getAirPollution();
  }

  getAirPollution() {
    this.airPollutionService.airPollutionData().subscribe({
      next: (res: AirPollution) => {
        this.airPollution = {
          coord: res.coord,
          list: res.list,
        };
      },
      complete: (): void => {
        this.typeQuality = this.airPollution.list[0].main.aqi;
        this.qualityAirText(this.typeQuality);
        // console.log(this.typeQuality)
      },
    });
    // console.log(this.airPollution);
  }

  qualityAirText(data: any) {
    switch (data) {
      case 1:
        console.log(data);
        this.quality = 'Boa';
        break;
      case 2:
        this.quality = 'Razoavel';
        break;
      case 3:
        this.quality = 'Moderada';
        break;
      case 4:
        this.quality = 'Ruim';
        break;
      case 5:
        this.quality = 'MuitoRuim';
        break;
      default:
        'Não definido'
    }
  }
}
