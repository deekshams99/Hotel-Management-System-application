package com.quinnox.hotelproject.service;

import java.util.List;

import com.quinnox.hotelproject.dto.RoomsDTO;
import com.quinnox.hotelproject.entity.Rooms;

public interface RoomsService {

	public boolean addRoom(RoomsDTO dto);
	public List<Rooms> getAllRooms();
	public Rooms getoneRoom(int roomId);
	public boolean updateRecord(int roomId,long roomCost,RoomsDTO dto);
	public boolean deleteRoom(int roomId);
	public List<Rooms> getVaccantRooms();
}
