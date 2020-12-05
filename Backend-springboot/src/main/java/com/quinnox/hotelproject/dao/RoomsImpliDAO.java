package com.quinnox.hotelproject.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.quinnox.hotelproject.dto.RoomsDTO;
import com.quinnox.hotelproject.entity.Hotels;
import com.quinnox.hotelproject.entity.Register;
import com.quinnox.hotelproject.entity.Rooms;

@Repository
public class RoomsImpliDAO implements RoomsDAO {

	@Autowired
	EntityManager manager;
	
	@Transactional
	@Override
	public boolean addRoom(RoomsDTO dto) {
	Rooms rooms= new Rooms();
	BeanUtils.copyProperties(dto, rooms);
		manager.persist(rooms);
		return true;
	}

	@Override
	public List<Rooms> getAllRooms() {
		TypedQuery<Rooms> result=manager.createQuery("From Rooms", Rooms.class);
		return result.getResultList();

	}

	@Override
	public Rooms getoneRoom(int roomId) {
		return manager.find(Rooms.class, roomId);
	}

	@Transactional
	@Override
	public boolean updateRecord(int roomId,long roomCost,RoomsDTO dto) {
		Rooms room=manager.find(Rooms.class, roomId);
	   // BeanUtils.copyProperties(dto, room);
	    room.setRoomType(dto.getRoomType());
	    room.setRoomCost(dto.getRoomCost());
	    room.setIsOccupied(dto.getIsOccupied());
	   
		return true;
	}

	@Transactional
	@Override
	public boolean deleteRoom(int roomId) {
		Rooms room=manager.find(Rooms.class,roomId );
		manager.remove(room);
		return true;
	}

	
	public List<Rooms> getVaccantRooms() {
		TypedQuery<Rooms> query=manager.createQuery("select r from Rooms r where r.isOccupied = 0",Rooms.class);
		return query.getResultList();
	}
	
	
}
