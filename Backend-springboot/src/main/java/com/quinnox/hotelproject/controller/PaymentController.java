package com.quinnox.hotelproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quinnox.hotelproject.dto.PaymentDTO;
import com.quinnox.hotelproject.entity.Payment;
import com.quinnox.hotelproject.service.PaymentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PaymentController {
	
	@Autowired
	PaymentService service;
	
	@PostMapping("/addpay")
	public boolean addpayment(@RequestBody PaymentDTO dto) {
		return service.addPayment(dto);
		
	}

	@GetMapping("/getallpay")
	public List<Payment> getallpay(){
		return service.getAllPayment();
	}
}
