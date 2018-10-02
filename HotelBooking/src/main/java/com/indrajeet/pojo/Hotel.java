package com.indrajeet.pojo;

import com.indrajeet.pojo.HotelReview;

public class Hotel {
	
	private long id;
	private String name;
	private String city;
	private String address;
	private long postalCode;
	private String province;
	private int rating;
	private HotelReview hotelReview ;
	
	public long getId() {
		return id;
	}
	public String getName() {
		return name;
	}

	public String getCity() {
		return city;
	}

	public String getAddress() {
		return address;
	}

	public long getPostalCode() {
		return postalCode;
	}

	public String getProvince() {
		return province;
	}

	public HotelReview getHotelReview() {
		return hotelReview;
	}
	public Hotel(long id, String name, String city, String address,int rating) {
		this.id = id;
		this.name = name;
		this.city = city;
		this.address = address;
		this.rating=rating;
	}
	
	public Hotel(long id, String name, String city, String address, long postalCode, String province,
			HotelReview hotelReview) {
		this.id = id;
		this.name = name;
		this.city = city;
		this.address = address;
		this.postalCode = postalCode;
		this.province = province;
		this.hotelReview = hotelReview;
	}
	public Hotel() {
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
}
