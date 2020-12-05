package com.quinnox.hotelproject.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quinnox.hotelproject.dto.HotelsDTO;
import com.quinnox.hotelproject.entity.Hotels;
import com.quinnox.hotelproject.service.HotelsService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class HotelsController {
	
	@Autowired
	HotelsService service;
	
	@PostMapping("/addhotel")
	public String addHotel(@RequestBody Hotels dto) {
		service.addHotel(dto);
		return "added succesfully";
	}
	
	@GetMapping("/getallhotel")
	public List<Hotels> getAllHotels(){
		return service.getAllHotel();
	}

	@PutMapping("/updatehotel")
	public String updateRecord(@RequestBody HotelsDTO dto) {
		service.updateRecord(dto);
		return "updated successfully";
	}
	
	@DeleteMapping("/deletehotel")
	public String deleteHotel(int hotelId) {
		service.deleteHotel(hotelId);
		return "deleted successfully";
	}
	
	@GetMapping("/getonehotel")
	public Hotels getOneHotel(int hotelId) {
		return service.getoneHotel(hotelId);
	}
}
