package com.pe.entity;

public class Combo {
	private int id;
	private String combo_name;
	private String combo_items;
	private String combo_price;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
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
	public String getCombo_price() {
		return combo_price;
	}
	public void setCombo_price(String combo_price) {
		this.combo_price = combo_price;
	}
	public Combo(int id, String combo_name,
			String combo_price ,String combo_items) {
		super();
		this.id = id;
		this.combo_name = combo_name;
		this.combo_items = combo_items;
		this.combo_price = combo_price;
	}
	
	
	
}
