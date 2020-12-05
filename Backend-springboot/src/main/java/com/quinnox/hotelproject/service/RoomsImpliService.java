package com.quinnox.hotelproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quinnox.hotelproject.dao.RoomsDAO;
import com.quinnox.hotelproject.dto.RoomsDTO;
import com.quinnox.hotelproject.entity.Rooms;

@Service
public class RoomsImpliService implements RoomsService{

	@Autowired
	RoomsDAO dao;

	@Override
	public boolean addRoom(RoomsDTO dto) {
		dao.addRoom(dto);
		return true;
	}

	@Override
	public List<Rooms> getAllRooms() {
		// TODO Auto-generated method stub
		return dao.getAllRooms();
	}

	@Override
	public Rooms getoneRoom(int roomId) {
		// TODO Auto-generated method stub
		return dao.getoneRoom(roomId);
	}

	@Override
	public boolean updateRecord(int roomId,long roomCost,RoomsDTO dto) {
		dao.updateRecord(roomId, roomCost, dto);
		return true;
	}

	@Override
	public boolean deleteRoom(int roomId) {
		dao.deleteRoom(roomId);
		return true;
	}

	@Override
	public List<Rooms> getVaccantRooms() {
		
		return dao.getVaccantRooms();
	}
}
