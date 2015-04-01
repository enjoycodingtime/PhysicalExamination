package com.pe.entity;

public class Combo {
	private String combo_name;
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
	private String combo_items;
	public Combo(String combo_name, String combo_items) {
		super();
		this.combo_name = combo_name;
		this.combo_items = combo_items;
	}
	
}
