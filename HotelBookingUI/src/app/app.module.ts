import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule, MatCardModule, MatFormFieldModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {HotelService} from './services/hotel.service';
import {StarRatingModule} from 'angular-star-rating';
import {HotelDetailsComponent} from './hotel-details/hotel-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HotelDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatCardModule,
    StarRatingModule.forRoot()
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
