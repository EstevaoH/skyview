//   export interface Weather{
//    coord: {
//     lon: number;
//     lat: number;
//   };
//    weather: [
//     {
//       id: number;
//       main: string;
//       description: string;
//       icon: string;
//     }
//   ];
//    base: string;
//    main: {
//     temp: number;
//     feels_like: number;
//     temp_min: number;
//     temp_max: number;
//     pressure: number;
//     humidity: number;
//     sea_level: number;
//     grnd_level: number;
//   };
//    visibility: number;
//    wind: {
//     speed: number;
//     deg: number;
//     gust: number;
//   };
//     rain: {
//     '1h': number;
//   };
//    clouds: {
//     all: number;
//   };
//    dt: number;
//    sys: {
//     type: number;
//     id: number;
//     country: string;
//     sunrise: number;
//     sunset: number;
//   };
//    timezone: number;
//    id: number;
//    name: string;
//    cod: number;
// }
// export class Weather {
//   coord!: {
//     lon: number;
//     lat: number;
//   }| undefined;
//   weather!: [
//     {
//       id: number;
//       main: string;
//       description: string;
//       icon: string;
//     }| undefined,
//   ];
//   base!: string;
//   main!: {
//     temp: number;
//     feels_like: number;
//     temp_min: number;
//     temp_max: number;
//     pressure: number;
//     humidity: number;
//     sea_level: number;
//     grnd_level: number;
//   } | undefined;
//   visibility!: number;
//   wind: {
//     speed: number;
//     deg: number;
//     gust: number;
//   } | undefined;
//   rain!: {
//     '1h': number;
//   }| undefined;
//   clouds!: {
//     all: number;
//   }| undefined;
//   dt!: number;
//   sys!: {
//     type: number;
//     id: number;
//     country: string;
//     sunrise: number;
//     sunset: number;
//   }| undefined;
//   timezone!: number;
//   id!: number;
//   name!: string;
//   cod!: number;

//   constructor() {}
// }
export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
  sea_level: number;
  grnd_level: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Snow {
  three_hours: number;
}

export interface Rain {
  three_hours: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export class WeatherData {
  constructor(
    public coord: Coord,
    public weather: Weather[],
    public base: string,
    public main: Main,
    public wind: Wind,
    public snow: Snow,
    public rain: Rain,
    public clouds: Clouds,
    public dt: number,
    public sys: Sys,
    public id: number,
    public name: string,
    public cod: number
  ) {}

  // static from({
  //   coord,
  //   weather,
  //   base,
  //   main,
  //   wind,
  //   snow,
  //   rain,
  //   clouds,
  //   dt,
  //   sys,
  //   id,
  //   name,
  //   cod,
  // }: WeatherData): WeatherData {
  //   return new WeatherData(
  //     coord,
  //     weather,
  //     base,
  //     main,
  //     wind,
  //     snow,
  //     rain,
  //     clouds,
  //     dt,
  //     sys,
  //     id,
  //     name,
  //     cod,
  //   )
  // }
}
