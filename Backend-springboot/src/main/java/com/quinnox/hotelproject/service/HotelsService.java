package com.quinnox.hotelproject.service;

import java.util.List;

import com.quinnox.hotelproject.dto.HotelsDTO;
import com.quinnox.hotelproject.entity.Hotels;

public interface HotelsService {

	
	public boolean addHotel(Hotels dto);
	public List<Hotels> getAllHotel();
	public Hotels getoneHotel(int hotelId);
	public boolean updateRecord(HotelsDTO dto);
	public int deleteHotel(int hotelId);
}
