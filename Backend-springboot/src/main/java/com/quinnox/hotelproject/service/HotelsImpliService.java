package com.quinnox.hotelproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quinnox.hotelproject.dao.HotelsDAO;
import com.quinnox.hotelproject.dto.HotelsDTO;
import com.quinnox.hotelproject.entity.Hotels;

@Service
public class HotelsImpliService implements HotelsService{
	@Autowired
	HotelsDAO dao;

	@Override
	public boolean addHotel(Hotels dto) {
		dao.addHotel(dto);
		return true;
	}

	@Override
	public List<Hotels> getAllHotel() {
		return dao.getAllHotel();
	}

	@Override
	public Hotels getoneHotel(int hotelId) {
		return dao.getoneHotel(hotelId);
	}

	@Override
	public boolean updateRecord(HotelsDTO dto) {
		dao.updateRecord(dto);
		return true;
	}

	@Override
	public int deleteHotel(int hotelId) {
		dao.deleteHotel(hotelId);
		return 1;
	}
}
