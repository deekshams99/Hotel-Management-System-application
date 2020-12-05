package com.quinnox.hotelproject.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.quinnox.hotelproject.dto.StaffsDTO;
import com.quinnox.hotelproject.entity.Staffs;

@Repository
public class StaffsImpliDAO implements StaffsDAO{

	@Autowired
	EntityManager manager;
	
	@Transactional
	@Override
	public boolean addStaff(StaffsDTO dto) {
		Staffs staffs=new Staffs();
		BeanUtils.copyProperties(dto, staffs);
		manager.persist(staffs);
		return true;
	}

	@Override
	public List<Staffs> getAllStaffs() {
		TypedQuery<Staffs> query=manager.createQuery("From Staffs", Staffs.class);
		return query.getResultList();
	}

	@Override
	public Staffs getoneStaff(int staffId) {
		return manager.find(Staffs.class, staffId);
	}

	@Transactional
	@Override
	public boolean updateRecord(int staffId,StaffsDTO dto) {
		Staffs staffs=manager.find(Staffs.class, staffId);
//		BeanUtils.copyProperties(dto, staffs);
		staffs.setStaffName(dto.getStaffName());
		staffs.setStaffSalary(dto.getStaffSalary());
		return true;
	}

	@Transactional
	@Override
	public int deleteStaff(int staffId) {
		Staffs staffs=manager.find(Staffs.class, staffId);
		manager.remove(staffs);
		return 1;
	}

}
