package com.pe.entity;

public class ExaminationProject {
	private int id;
	private String office_name;
	private String project_name;
	private String reference_standard;
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
	public String getReference_standard() {
		return reference_standard;
	}
	public void setReference_standard(String reference_standard) {
		this.reference_standard = reference_standard;
	}
	public ExaminationProject(int id, String office_name, String project_name,
			String reference_standard) {
		super();
		this.id = id;
		this.office_name = office_name;
		this.project_name = project_name;
		this.reference_standard = reference_standard;
	}
	
	
}
