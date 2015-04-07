package com.pe.entity;

public class Office {
	private int id;
	private String office_name;
	private String office_number;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getOffice_name() {
		return office_name;
	}
	public void setOffice_name(String office_name) {
		this.office_name = office_name;
	}
	public String getOffice_number() {
		return office_number;
	}
	public void setOffice_number(String office_number) {
		this.office_number = office_number;
	}
	public Office(int id, String office_name, String office_number) {
		super();
		this.id = id;
		this.office_name = office_name;
		this.office_number = office_number;
	}
	
}
