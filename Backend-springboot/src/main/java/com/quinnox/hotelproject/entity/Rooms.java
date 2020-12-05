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
@Table(name = "Rooms")
public class Rooms {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "roomId")
	private int roomId;
	
	@Column(name = "roomType")
	private String roomType;
	
	@Column(name = "roomCost")
	private int roomCost;
	
	@Column(name = "isOccupied")
	private int isOccupied;
	
	
}
