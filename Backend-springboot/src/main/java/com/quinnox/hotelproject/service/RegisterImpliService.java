package com.quinnox.hotelproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quinnox.hotelproject.dao.RegisterDAO;
import com.quinnox.hotelproject.dto.RegisterDTO;
import com.quinnox.hotelproject.entity.Register;

@Service
public class RegisterImpliService implements RegisterService{

	@Autowired
	RegisterDAO dao;

	@Override
	public boolean addCustomer(RegisterDTO dto) {
		dao.addCustomer(dto);
		return true;
	}

	@Override
	public List<Register> getAllCustomer() {
		
		return dao.getAllCustomer();
	}

	@Override
	public Register getoneCustomer(int custId) {
		
		return dao.getoneCustomer(custId);
	}

	@Override
	public boolean updateRecord(RegisterDTO dto) {
		dao.updateRecord(dto);
		return true;
	}

	@Override
	public int deleteCustomer(int custId) {
		dao.deleteCustomer(custId);
		return 1;
	}
}
