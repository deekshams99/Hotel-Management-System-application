package com.quinnox.hotelproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quinnox.hotelproject.dto.RoomsDTO;
import com.quinnox.hotelproject.entity.Rooms;
import com.quinnox.hotelproject.service.RoomsService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RoomsController {
	
	@Autowired
	RoomsService service;
	
	@PostMapping("/addroom")
	public boolean addRoom(@RequestBody RoomsDTO dto) {
		
		return service.addRoom(dto);
	}
	
	@GetMapping("/getallroom")
	public List<Rooms> getAllHotels(){
		return service.getAllRooms();
	}
	
	@PutMapping("/updateroom/{roomId}/{roomCost}")
	public boolean updateRecord(@PathVariable int roomId,@PathVariable long roomCost,@RequestBody RoomsDTO dto) {
		
		return service.updateRecord( roomId,roomCost, dto);
	}
	
	@DeleteMapping("/deleteroom/{roomId}")
	public boolean deleteRoom(@PathVariable int roomId) {
		
		return service.deleteRoom(roomId);
	}
	
	@GetMapping("/getoneroom/{roomId}")
	public Rooms getOneHotel(@PathVariable int roomId) {
		return service.getoneRoom(roomId);
	}
     
	@GetMapping("/getvaccant")
	public List<Rooms> getVaccantRoom(){
	return service.getVaccantRooms();	
	}
}
