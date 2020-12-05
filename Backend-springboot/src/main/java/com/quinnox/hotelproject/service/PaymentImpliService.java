package com.quinnox.hotelproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quinnox.hotelproject.dao.PaymentDAO;
import com.quinnox.hotelproject.dto.PaymentDTO;
import com.quinnox.hotelproject.entity.Payment;

@Service
public class PaymentImpliService implements PaymentService {
@Autowired
PaymentDAO dao;
	
	@Override
	public boolean addPayment(PaymentDTO dto) {
		
		return dao.addPayment(dto);
	}

	@Override
	public List<Payment> getAllPayment() {
		
		return dao.getAllPayment();
	}

}
