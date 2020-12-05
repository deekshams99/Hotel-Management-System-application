package com.quinnox.hotelproject.dao;

import java.util.List;

import com.quinnox.hotelproject.dto.RegisterDTO;
import com.quinnox.hotelproject.entity.Register;

public interface RegisterDAO {

	public boolean addCustomer(RegisterDTO dto);
	public List<Register> getAllCustomer();
	public Register getoneCustomer(int custId);
	public boolean updateRecord(RegisterDTO dto);
	public int deleteCustomer(int custId);

}
