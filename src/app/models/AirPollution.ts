export interface List {
  dt: number;
  main: { aqi: number };
  components: {
    co: number;
    no: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
    nh3: number;
  };
}
export interface Coord {
  lon: number;
  lat: number;
}

export class AirPollution {
  coord!: Coord;
  list!: List[]

  constructor() {}
}
