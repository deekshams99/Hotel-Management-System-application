package com.quinnox.hotelproject.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.quinnox.hotelproject.dto.RegisterDTO;
import com.quinnox.hotelproject.entity.Register;

@Repository
public class RegisterImpliDAO implements RegisterDAO{
	
	@Autowired
	EntityManager manager;

	@Transactional
	@Override
	public boolean addCustomer(RegisterDTO dto) {
		Register register = new Register();
		BeanUtils.copyProperties(dto, register);
		manager.persist(register);
		return true;
	}

	@Override
	public List<Register> getAllCustomer() {
		TypedQuery<Register> result=manager.createQuery("From Register", Register.class);
		return result.getResultList();
	}

	@Override
	public Register getoneCustomer(int custId) {
		 
		return manager.find(Register.class, custId);
	}

	@Transactional
	@Override
	public boolean updateRecord(RegisterDTO dto) {
		Register register=manager.find(Register.class, dto.getCustId());
	    BeanUtils.copyProperties(dto, register);
		return true;
	}

	@Transactional
	@Override
	public int deleteCustomer(int custId) {
		Register register=manager.find(Register.class,custId );
		manager.remove(register);
		return 1;
	}

}
