package com.quinnox.hotelproject.dto;

import lombok.Data;

@Data
public class PaymentDTO {

	
private int paymentId;
	
	
	private int roomId;
	
	private String custName;
	
	private long roomCost;
	
	private long phoneNumber;
	
	private long atmNumber;
	
	private long cvv;
}
