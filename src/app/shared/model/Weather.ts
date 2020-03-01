export class CurrentWeather {

    constructor(data: any) {
        this.id = data.id;
        this.weather = data.weather;
        this.name = data.name;
    }
    id: number;
    weather: Weather;
    name: string;
}


interface Weather {
    id: number;
    description: string;
}