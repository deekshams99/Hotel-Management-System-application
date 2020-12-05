package com.quinnox.hotelproject.dao;

import java.util.List;

import com.quinnox.hotelproject.dto.HotelsDTO;
import com.quinnox.hotelproject.entity.Hotels;
import com.quinnox.hotelproject.entity.Register;

public interface HotelsDAO {

	
	public boolean addHotel(Hotels dto);
	public List<Hotels> getAllHotel();
	public Hotels getoneHotel(int hotelId);
	public boolean updateRecord(HotelsDTO dto);
	public int deleteHotel(int hotelId);

}
