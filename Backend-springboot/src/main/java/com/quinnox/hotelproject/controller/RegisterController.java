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

import com.quinnox.hotelproject.dto.RegisterDTO;
import com.quinnox.hotelproject.entity.Register;
import com.quinnox.hotelproject.service.RegisterService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RegisterController {
	
	@Autowired
	RegisterService service;
	
	@PostMapping("/addcust")
	public boolean addCustomer(@RequestBody RegisterDTO dto) {
		return service.addCustomer(dto);
		
	}
	
	@GetMapping("/getallcust")
	public List<Register> getAllCustomers(){
		return service.getAllCustomer();
	}

	@PutMapping("/updateCust")
	public String updateRecord(@RequestBody RegisterDTO dto) {
		service.updateRecord(dto);
		return "updated successfully";
	}
	
	@DeleteMapping("/deleteCust/{custId}")
	public int deleteCust(@PathVariable int custId) {
		
		return service.deleteCustomer(custId);
	}
	
	@GetMapping("/getonecust")
	public Register getOneCust(int custId) {
		return service.getoneCustomer(custId);
	}
}
