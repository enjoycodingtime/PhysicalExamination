package com.pe.entity;

public class Registration {
	private int id;

	private String name;
	private String sex;
	private String age;
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
	public Registration(int id, String name, String sex, String age,
			String phone_number, String date, String physical_examination,
			String combo, String comments) {
		super();
		this.id = id;
		this.name = name;
		this.sex = sex;
		this.age = age;
		this.phone_number = phone_number;
		this.date = date;
		this.physical_examination = physical_examination;
		this.combo = combo;
		this.comments = comments;
	}
	
}
