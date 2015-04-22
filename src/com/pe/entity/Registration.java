package com.pe.entity;

public class Registration {
	private int id;
	private String name;
	private String sex;
	private String birthday;
	private String idCard;
	private String address;
	private String marriage;
	private String nationa;
	private String reservation_date;
	private String phone_number;
	private String date;
	private String physical_examination;
	private String combo;
	private String comments;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
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
	public String getBirthday() {
		return birthday;
	}
	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}
	public String getIdCard() {
		return idCard;
	}
	public void setIdCard(String idCard) {
		this.idCard = idCard;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getMarriage() {
		return marriage;
	}
	public void setMarriage(String marriage) {
		this.marriage = marriage;
	}
	public String getNationa() {
		return nationa;
	}
	public void setNationa(String nationa) {
		this.nationa = nationa;
	}
	public String getReservation_date() {
		return reservation_date;
	}
	public void setReservation_date(String reservation_date) {
		this.reservation_date = reservation_date;
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
	public String getCombo() {
		return combo;
	}
	public void setCombo(String combo) {
		this.combo = combo;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	public Registration(int id, String name, String sex, String birthday,
			String idCard, String address, String marriage, String nationa,
			String reservation_date, String phone_number, String date,
			String physical_examination, String combo, String comments) {
		super();
		this.id = id;
		this.name = name;
		this.sex = sex;
		this.birthday = birthday;
		this.idCard = idCard;
		this.address = address;
		this.marriage = marriage;
		this.nationa = nationa;
		this.reservation_date = reservation_date;
		this.phone_number = phone_number;
		this.date = date;
		this.physical_examination = physical_examination;
		this.combo = combo;
		this.comments = comments;
	}
	
}
