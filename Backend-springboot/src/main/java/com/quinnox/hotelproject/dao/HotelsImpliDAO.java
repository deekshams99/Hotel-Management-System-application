package com.quinnox.hotelproject.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.quinnox.hotelproject.dto.HotelsDTO;
import com.quinnox.hotelproject.entity.Hotels;
import com.quinnox.hotelproject.entity.Rooms;


@Repository
public class HotelsImpliDAO implements HotelsDAO {

	@Autowired
	EntityManager manager;
	
	@Transactional
	@Override
	public boolean addHotel(Hotels dto) {
		Hotels hotels=new Hotels();
//		Rooms rooms=new Rooms();
//		BeanUtils.copyProperties(rooms, hotels);
//		hotels.getRooms().add(rooms);
		BeanUtils.copyProperties(dto, hotels);
//		
		manager.persist(hotels);
		return true;
	}

	@Override
	public List<Hotels> getAllHotel() {
		
		TypedQuery<Hotels> result=manager.createQuery("From Hotels", Hotels.class);
		return result.getResultList();
	}

	@Override
	public Hotels getoneHotel(int hotelId) {
		
		return manager.find(Hotels.class, hotelId);
	}

	@Transactional
	@Override
	public boolean updateRecord(HotelsDTO dto) {
		Hotels hotels=manager.find(Hotels.class, dto.getHotelId());
	    BeanUtils.copyProperties(dto,hotels );
		return true;
	}

	@Transactional
	@Override
	public int deleteHotel(int hotelId) {
		Hotels hotels=manager.find(Hotels.class,hotelId );
		manager.remove(hotels);
		return 1;
	}

}
