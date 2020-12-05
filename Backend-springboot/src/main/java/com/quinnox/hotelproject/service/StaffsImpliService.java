package com.quinnox.hotelproject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quinnox.hotelproject.dao.StaffsDAO;
import com.quinnox.hotelproject.dto.StaffsDTO;
import com.quinnox.hotelproject.entity.Staffs;

@Service
public class StaffsImpliService implements StaffsService{

	@Autowired
	StaffsDAO dao;

	@Override
	public boolean addStaff(StaffsDTO dto) {
		dao.addStaff(dto);
		return true;
	}

	@Override
	public List<Staffs> getAllStaffs() {
		
		return dao.getAllStaffs();
	}

	@Override
	public Staffs getoneStaff(int staffId) {
		
		return dao.getoneStaff(staffId);
	}

	@Override
	public boolean updateRecord(int staffId,StaffsDTO dto) {
		dao.updateRecord(staffId, dto);
		return true;
	}

	@Override
	public int deleteStaff(int staffId) {
		dao.deleteStaff(staffId);
		return 1;
	}
}
