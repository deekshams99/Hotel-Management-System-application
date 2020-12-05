package com.quinnox.hotelproject.dao;

import java.util.List;

import com.quinnox.hotelproject.dto.PaymentDTO;
import com.quinnox.hotelproject.entity.Payment;

public interface PaymentDAO {

	public boolean addPayment(PaymentDTO dto);
	public List<Payment> getAllPayment();

	
}
