package com.quinnox.hotelproject.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "Staffs")
public class Staffs {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "staffId")
	private int staffId;
	
	@Column(name = "staffName")
	private String staffName;
	
	@Column(name = "staffSalary")
     private long staffSalary;
	
	
}
