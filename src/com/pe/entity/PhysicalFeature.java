package com.pe.entity;

public class PhysicalFeature {
	private int id;
	private String name;
	private String result;
	private String operator;
	private String compare_man;
	private String compare_woman;
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
	public String getResult() {
		return result;
	}
	public void setResult(String result) {
		this.result = result;
	}
	public String getOperator() {
		return operator;
	}
	public void setOperator(String operator) {
		this.operator = operator;
	}
	public String getCompare_man() {
		return compare_man;
	}
	public void setCompare_man(String compare_man) {
		this.compare_man = compare_man;
	}
	public String getCompare_woman() {
		return compare_woman;
	}
	public void setCompare_woman(String compare_woman) {
		this.compare_woman = compare_woman;
	}
	public PhysicalFeature(int id, String name, String result, String operator,
			String compare_man, String compare_woman) {
		super();
		this.id = id;
		this.name = name;
		this.result = result;
		this.operator = operator;
		this.compare_man = compare_man;
		this.compare_woman = compare_woman;
	}
	
}
