package com.pe.entity;

public class Conclusion {
	private int id;
	private String name;
	private String conclusion;
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
	public String getConclusion() {
		return conclusion;
	}
	public void setConclusion(String conclusion) {
		this.conclusion = conclusion;
	}
	public Conclusion(int id, String name, String conclusion) {
		super();
		this.id = id;
		this.name = name;
		this.conclusion = conclusion;
	}
	
}
