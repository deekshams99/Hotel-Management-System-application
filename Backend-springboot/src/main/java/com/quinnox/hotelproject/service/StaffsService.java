package com.quinnox.hotelproject.service;

import java.util.List;

import com.quinnox.hotelproject.dto.StaffsDTO;
import com.quinnox.hotelproject.entity.Staffs;

public interface StaffsService {

	public boolean addStaff(StaffsDTO dto);
	public List<Staffs> getAllStaffs();
	public Staffs getoneStaff(int staffId);
	public boolean updateRecord(int staffId,StaffsDTO dto);
	public int deleteStaff(int staffId);
}
