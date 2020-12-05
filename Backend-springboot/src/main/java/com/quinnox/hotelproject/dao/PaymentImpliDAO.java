package com.quinnox.hotelproject.dao;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.quinnox.hotelproject.dto.PaymentDTO;
import com.quinnox.hotelproject.entity.Payment;

@Repository
public class PaymentImpliDAO implements PaymentDAO {

	@Autowired
	EntityManager manager;
	
	@Transactional
	@Override
	public boolean addPayment(PaymentDTO dto) {
		Payment payment= new Payment();
		BeanUtils.copyProperties(dto, payment);
		manager.persist(payment);
		return true;
	}

	@Override
	public List<Payment> getAllPayment() {
		TypedQuery<Payment> query=manager.createQuery("From Payment", Payment.class);
		return query.getResultList();
	}

}
