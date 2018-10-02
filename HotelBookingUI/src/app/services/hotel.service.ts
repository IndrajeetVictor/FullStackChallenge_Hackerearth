import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {City, Hotel} from '../homepage/homepage.component';

@Injectable()
export class HotelService {

  constructor(private httpClient: HttpClient) {

  }

  getCity(): Promise<City[]> {
    return this.httpClient.get<City[]>(`http://localhost:8080/homepage`)
      .toPromise()
      .then(response => response);
  }

  getHotels(city: City): Promise<Hotel[]> {
    return this.httpClient.get<Hotel[]>(`http://localhost:8080/hotels/${city.name}`)
      .toPromise()
      .then(response => response);
  }

  getHotelDetails(hotelId: string): Promise<Hotel> {
    return this.httpClient.get<Hotel>(`http://localhost:8080/hotel/${hotelId}`)
      .toPromise()
      .then(response => response);
  }
}
