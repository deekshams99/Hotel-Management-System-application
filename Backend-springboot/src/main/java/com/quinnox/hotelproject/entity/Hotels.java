package com.quinnox.hotelproject.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "Hotels")
public class Hotels {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "hotelId")
	private int hotelId;
	
	@Column(name = "hotelName")
	private String hotelName;
	
	@Column(name = "hotelAddress")
	private String hotelAddress;
	
	@Column(name = "hotelRatings")
	private String hotelRatings;
	
//	@OneToMany(cascade = CascadeType.ALL)
//	@JoinColumn(name = "hotelId", referencedColumnName = "hotelId")
//	private List<Rooms> rooms = new ArrayList<Rooms>();
}
