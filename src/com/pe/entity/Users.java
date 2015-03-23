package com.pe.entity;

public class Users {
	private Integer id;
     private String name;
     private String password;
     private String position;
     

	public String getPosition() {
		return position;
	}
	public void setPosition(String position) {
		this.position = position;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
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
	
	public Users() {
		super();
	}
	
	public Users(Integer id, String name, String password, String position) {
		super();
		this.id = id;
		this.name = name;
		this.password = password;
		this.position = position;
	}
	@Override
	public String toString() {
		return "Users [id=" + id + ", name=" + name + ", password=" + password
				+ ", position=" + position + "]";
	}

	
     
}
