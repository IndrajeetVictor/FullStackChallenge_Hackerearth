package com.indrajeet.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.indrajeet.entities.HotelEntity;
import com.indrajeet.pojo.City;
import com.indrajeet.services.HotelService;

@RestController
public class MainController {
	
	@Autowired
	private HotelService hotelService;
	
	@GetMapping("/homepage")
	public List<City> getCities() {
		return hotelService.getCities() ;
	}
	@GetMapping("/hotels/{city}")
	public List<HotelEntity> getHotels(@PathVariable(value="city") String city){
		return hotelService.getHotelsForCity(city);
	}
	@GetMapping("/hotel/{id}")
	public HotelEntity getHotel(@PathVariable(value="id") long id) {
		return hotelService.getHotelDetails(id);
	}

}
