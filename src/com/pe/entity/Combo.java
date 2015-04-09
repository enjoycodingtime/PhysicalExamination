package com.pe.entity;

public class Combo {
	private int id;
	private String combo_name;
	private String combo_items;
	
	public String getCombo_name() {
		return combo_name;
	}
	public void setCombo_name(String combo_name) {
		this.combo_name = combo_name;
	}
	public String getCombo_items() {
		return combo_items;
	}
	public void setCombo_items(String combo_items) {
		this.combo_items = combo_items;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public Combo(int id, String combo_name, String combo_items) {
		super();
		this.id = id;
		this.combo_name = combo_name;
		this.combo_items = combo_items;
	}
	
}
