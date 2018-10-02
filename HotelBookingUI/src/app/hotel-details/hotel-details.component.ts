import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HotelService} from '../services/hotel.service';
import {Hotel} from '../homepage/homepage.component';

@Component({
  selector: 'myapp-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {
  id: any;
  hotel: Hotel;

  constructor(private route: ActivatedRoute,
              private hotelService: HotelService) {
  }

  ngOnInit() {
    this.hotelService.getHotelDetails(this.route.snapshot.paramMap.get('id'))
      .then((hotel) => {
        this.hotel = hotel;
      });
  }

}
