package com.pe.entity;

public class Office {
	private int id;
	private String office_name;
	private String office_number;
	private int office_type;
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
	
	public int getOffice_type() {
		return office_type;
	}
	public void setOffice_type(int office_type) {
		this.office_type = office_type;
	}
	public Office(int id, String office_name, int office_type,String office_number
			) {
		super();
		this.id = id;
		this.office_name = office_name;
		this.office_number = office_number;
		this.office_type = office_type;
	}
	
	
}
