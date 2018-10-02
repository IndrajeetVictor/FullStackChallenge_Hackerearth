package com.indrajeet.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.indrajeet.entities.HotelEntity;
import com.indrajeet.pojo.City;
import com.indrajeet.repository.HotelRepository;

@Service
public class HotelService {
	
	@Autowired 
	private HotelRepository hotelRepo;
	
	public HotelEntity getHotelDetails(long id) {
		return hotelRepo.findById(id);
	}
	
	public List<HotelEntity> getHotelsForCity(String city){
		return hotelRepo.getHotels(city);
	}
	
	public List<City> getCities(){
		List<City> cityList= new ArrayList<>();
		for(String s :hotelRepo.getCitiesFromDB()){
			cityList.add(new City(s));
		}
		return cityList;
	}
}
