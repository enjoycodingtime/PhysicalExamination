package com.pe.entity;

public class GroupReservation {
	private int id;
	private int combo_discount;
	private String combo_id;
	private int group_number;
	private String groupName;
	private String address;
	private String allCount;
	private String leaderName;
	private String leaderPhoneNumber;
	private String time;
	private String physical_examination;
	private String reservation_date;
	private int status;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getCombo_discount() {
		return combo_discount;
	}
	public void setCombo_discount(int combo_discount) {
		this.combo_discount = combo_discount;
	}
	public String getCombo_id() {
		return combo_id;
	}
	public void setCombo_id(String combo_id) {
		this.combo_id = combo_id;
	}
	public int getGroup_number() {
		return group_number;
	}
	public void setGroup_number(int group_number) {
		this.group_number = group_number;
	}
	public String getGroupName() {
		return groupName;
	}
	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getAllCount() {
		return allCount;
	}
	public void setAllCount(String allCount) {
		this.allCount = allCount;
	}
	public String getLeaderName() {
		return leaderName;
	}
	public void setLeaderName(String leaderName) {
		this.leaderName = leaderName;
	}
	public String getLeaderPhoneNumber() {
		return leaderPhoneNumber;
	}
	public void setLeaderPhoneNumber(String leaderPhoneNumber) {
		this.leaderPhoneNumber = leaderPhoneNumber;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getPhysical_examination() {
		return physical_examination;
	}
	public void setPhysical_examination(String physical_examination) {
		this.physical_examination = physical_examination;
	}
	public String getReservation_date() {
		return reservation_date;
	}
	public void setReservation_date(String reservation_date) {
		this.reservation_date = reservation_date;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public GroupReservation(int id, int combo_discount, String combo_id,
			int group_number, String groupName, String address,
			String allCount, String leaderName, String leaderPhoneNumber,
			String time, String physical_examination, String reservation_date,
			int status) {
		super();
		this.id = id;
		this.combo_discount = combo_discount;
		this.combo_id = combo_id;
		this.group_number = group_number;
		this.groupName = groupName;
		this.address = address;
		this.allCount = allCount;
		this.leaderName = leaderName;
		this.leaderPhoneNumber = leaderPhoneNumber;
		this.time = time;
		this.physical_examination = physical_examination;
		this.reservation_date = reservation_date;
		this.status = status;
	}
		
}
