package com.indrajeet.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.indrajeet.entities.HotelEntity;

@Repository
public interface HotelRepository extends JpaRepository<HotelEntity, Long>{
	
	public HotelEntity findById(long id) ;
	
	@Query("select h from HotelEntity h where h.city=:city")
	public List<HotelEntity> getHotels(String city); 
	
	@Query("select distinct(city) from HotelEntity")
	public List<String> getCitiesFromDB();
}
