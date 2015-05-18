package com.pe.entity;

public class ExaminationProject {
	private int id;
	private String office_name;
	private String project_name;
	private String price;
	private String combo_price;
	private String physical_feature_id;
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
	public String getProject_name() {
		return project_name;
	}
	public void setProject_name(String project_name) {
		this.project_name = project_name;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getCombo_price() {
		return combo_price;
	}
	public void setCombo_price(String combo_price) {
		this.combo_price = combo_price;
	}
	public String getPhysical_feature_id() {
		return physical_feature_id;
	}
	public void setPhysical_feature_id(String physical_feature_id) {
		this.physical_feature_id = physical_feature_id;
	}
	public ExaminationProject(int id, String office_name, String project_name,
			String price, String combo_price, String physical_feature_id) {
		super();
		this.id = id;
		this.office_name = office_name;
		this.project_name = project_name;
		this.price = price;
		this.combo_price = combo_price;
		this.physical_feature_id = physical_feature_id;
	}
	
}
