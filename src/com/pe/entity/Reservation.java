package com.pe.entity;

public class Reservation {
	private String name;
	private String sex;
	private String age;
	private String phone_number;
	private String date;
	private String physical_examination;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getPhone_number() {
		return phone_number;
	}
	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getPhysical_examination() {
		return physical_examination;
	}
	public void setPhysical_examination(String physical_examination) {
		this.physical_examination = physical_examination;
	}
	public Reservation(String name, String sex, String age,
			String phone_number, String date, String physical_examination) {
		super();
		this.name = name;
		this.sex = sex;
		this.age = age;
		this.phone_number = phone_number;
		this.date = date;
		this.physical_examination = physical_examination;
	}
	

}
