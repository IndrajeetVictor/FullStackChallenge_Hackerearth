import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {HotelDetailsComponent} from './hotel-details/hotel-details.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'hotel/:id', component: HotelDetailsComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
