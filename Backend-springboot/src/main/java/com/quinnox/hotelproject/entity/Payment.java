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
@Table(name = "Payment")
public class Payment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "paymentId")
	private int paymentId;
	
	@Column(name = "roomId")
	private int roomId;
	
	@Column(name="custName")
	private String custName;
	
	@Column(name = "phoneNumber")
	private long phoneNumber;
	
	@Column(name = "roomCost")
	private long roomCost;
	
	@Column(name = "atmNumber")
	private long atmNumber;
	
	@Column(name ="cvv")
	private long cvv;

}
