package com.quinnox.hotelproject.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;



import lombok.Data;


@Data
@Entity
@Table(name = "Register")
public class Register {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "custId")
	private int custId;
	
	@NotEmpty
	@Column(name = "custName")
	private String custName;
	
	@NotEmpty
	@Column(name = "emailId",unique = true)
	private String emailId;
	
	@Column(name = "phoneNumber")
	private long phoneNumber;
	
//	@Size(min = 5,max = 8)
	@Column(name = "password")
	private String password;
	
	@Column(name = "address")
	private String address;
	
	@Column(name = "gender")
	private String gender;
	
//	@NotEmpty
//	@Column(name = "role")
//	private String role;

}
