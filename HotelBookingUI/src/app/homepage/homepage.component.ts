import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {HotelService} from '../services/hotel.service';
import {Router} from '@angular/router';

export interface City {
  name: string;
}

export interface Hotel {
  id: string;
  name: string;
  city: string;
  address: string;
  postalCode: string;
  province: string;
  hotelReview: {
    rating: string;
    username: string;
    reviewTitle: string;
    reviewDetail: string;
  };
  rating: string;
}

@Component({
  selector: 'myapp-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  myControl = new FormControl();
  options: City[] = [];
  hotels: Hotel[] = [];
  filteredOptions: Observable<City[]>;

  constructor(private hotelService: HotelService, private router: Router) {

  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | City>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );

    this.hotelService.getCity()
      .then((city) => {
        this.options = city;
      });
  }

  displayFn(user?: City): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): City[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  onSearchClick() {
    this.hotelService.getHotels(this.myControl.value)
      .then((hotels) => {
        this.hotels = hotels;
      });
  }
}
