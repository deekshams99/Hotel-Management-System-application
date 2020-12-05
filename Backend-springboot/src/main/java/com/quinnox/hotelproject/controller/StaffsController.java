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

import com.quinnox.hotelproject.dto.StaffsDTO;
import com.quinnox.hotelproject.entity.Staffs;
import com.quinnox.hotelproject.service.StaffsService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class StaffsController {

	@Autowired
	StaffsService service;
	
	@PostMapping("/addstaff")
	public boolean addStaffs(@RequestBody StaffsDTO dto) {
		return service.addStaff(dto);
	}
	
	@GetMapping("/getstaff")
	public List<Staffs> getallstaffs(){
		return service.getAllStaffs();
	}
	
	@GetMapping("/getonestaff/{staffId}")
	public Staffs getonestaff(@PathVariable int staffId){
		return service.getoneStaff(staffId);
	}
	
	@PutMapping("/updatestaff/{staffId}")
	public boolean updateStaff(@PathVariable int staffId,@RequestBody StaffsDTO dto) {
		
		return service.updateRecord(staffId, dto);
	}
	
	@DeleteMapping("/deletestaff/{staffId}")
	public int deleteStaff(@PathVariable int staffId) {
		 return service.deleteStaff(staffId);
	}
}
