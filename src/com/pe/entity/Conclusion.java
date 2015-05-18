package com.pe.entity;

public class Conclusion {
	private int id;
	private String name;
	private String conclusion;
	private String explain_disease;
	private String suggestion;
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
	public String getExplain_disease() {
		return explain_disease;
	}
	public void setExplain_disease(String explain_disease) {
		this.explain_disease = explain_disease;
	}
	public String getSuggestion() {
		return suggestion;
	}
	public void setSuggestion(String suggestion) {
		this.suggestion = suggestion;
	}
	public Conclusion(int id, String name, String conclusion,
			String explain_disease, String suggestion) {
		super();
		this.id = id;
		this.name = name;
		this.conclusion = conclusion;
		this.explain_disease = explain_disease;
		this.suggestion = suggestion;
	}
	
	
}
