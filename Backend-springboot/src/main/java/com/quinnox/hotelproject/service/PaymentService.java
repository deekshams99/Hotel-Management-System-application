package com.quinnox.hotelproject.service;

import java.util.List;

import com.quinnox.hotelproject.dto.PaymentDTO;
import com.quinnox.hotelproject.entity.Payment;

public interface PaymentService {

	public boolean addPayment(PaymentDTO dto);
	public List<Payment> getAllPayment();
}
