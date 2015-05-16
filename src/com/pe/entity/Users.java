package com.pe.entity;

public class Users {
	private String id;
	private String name;
	private String password;
	private String position;
	private String office;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPosition() {
		return position;
	}
	public void setPosition(String position) {
		this.position = position;
	}
	public String getOffice() {
		return office;
	}
	public void setOffice(String office) {
		this.office = office;
	}
	public Users(String id, String name, String password, String position,
			String office) {
		super();
		this.id = id;
		this.name = name;
		this.password = password;
		this.position = position;
		this.office = office;
	}
	
}
