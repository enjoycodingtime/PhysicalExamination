package com.pe.dao;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.pe.entity.Reservation;
import com.pe.util.DBUtil;



public class ReservationDao {
	private static Connection conn=null;
	private static PreparedStatement ps =null;
	private static ResultSet rs =null;
	public static void insertReservation (String name,String sex, String birthday, String address,String phone_number,String idCard,String marriage,String nationa,
			String date,String reservation_date,String physical_examination, String combo) throws Exception{
		conn = DBUtil.getConnection();
		String sql = "insert into reservation(name, sex, birthday, address,phone_number,idCard,marriage,nationa,"
				+ "date, reservation_date,physical_examination,combo,status) values(?,?,?,?,?,?,?,?,?,?,?,?,?)";
		ps =conn.prepareStatement(sql);
		ps.setString(1, name);
		ps.setString(2, sex);
		ps.setString(3, birthday);
		ps.setString(4, address);
		ps.setString(5, phone_number);
		ps.setString(6, idCard);
		ps.setString(7, marriage);
		ps.setString(8, nationa);
		ps.setString(9, date);
		ps.setString(10, reservation_date);
		ps.setString(11, physical_examination);
		ps.setString(12, combo);
		ps.setInt(13, 0);
		ps.executeUpdate();
	}
	
	public static void insertRegistrate (String name,String sex, String birthday, String address,String phone_number,String idCard,String marriage,String nationa,
			String date,String reservation_date,String physical_examination, String combo) throws Exception{
		conn = DBUtil.getConnection();
		String sql = "insert into registration(name, sex, birthday, address,phone_number,idCard,marriage,nationa,"
				+ "date, reservation_date,physical_examination,combo) values(?,?,?,?,?,?,?,?,?,?,?,?)";
		ps =conn.prepareStatement(sql);
		ps.setString(1, name);
		ps.setString(2, sex);
		ps.setString(3, birthday);
		ps.setString(4, address);
		ps.setString(5, phone_number);
		ps.setString(6, idCard);
		ps.setString(7, marriage);
		ps.setString(8, nationa);
		ps.setString(9, date);
		ps.setString(10, reservation_date);
		ps.setString(11, physical_examination);
		ps.setString(12, combo);
		ps.executeUpdate();
	}
	
	
	public List<Reservation> getReservation() throws Exception{
		List<Reservation> list = new ArrayList<Reservation>();
		conn=DBUtil.getConnection();
		String sql ="select * from reservation";
		
		ps =conn.prepareStatement(sql);
		rs= ps.executeQuery();
		while(rs.next()){
			int id = rs.getInt("id");
			String name = rs.getString("name");
			String birthday = rs.getString("birthday");
			String sex = rs.getString("sex");
			String address = rs.getString("address");
			String idCard = rs.getString("idCard");
			String marriage = rs.getString("marriage");
			String nationa = rs.getString("nationa");
			String phone_number = rs.getString("phone_number");
			String date = rs.getString("date");
			String reservation_date = rs.getString("reservation_date");
			String physical_examination = rs.getString("physical_examination");
			String combo = rs.getString("combo");
			int status = rs.getInt("status");
			
			Reservation reservation =new Reservation(id, name, sex, birthday,
					 idCard, address, marriage,  nationa,
					 reservation_date,  phone_number,  date,
					 physical_examination,  combo, status);
			list.add(reservation);
		}
		return list;
	}
	public List<Reservation> getReservationById(int id) throws Exception{
		List<Reservation> list = new ArrayList<Reservation>();
		conn=DBUtil.getConnection();
		String sql ="select * from reservation where id=?";		
		ps =conn.prepareStatement(sql);
		ps.setInt(1, id);
		rs= ps.executeQuery();
		while(rs.next()){
			int id1 = rs.getInt("id");
			String name = rs.getString("name");
			String birthday = rs.getString("birthday");
			String sex = rs.getString("sex");
			String address = rs.getString("address");
			String idCard = rs.getString("idCard");
			String marriage = rs.getString("marriage");
			String nationa = rs.getString("nationa");
			String phone_number = rs.getString("phone_number");
			String date = rs.getString("date");
			String reservation_date = rs.getString("reservation_date");
			String physical_examination = rs.getString("physical_examination");
			String combo = rs.getString("combo");
			int status = rs.getInt("status");
			
			Reservation reservation =new Reservation(id1, name, sex, birthday,
					 idCard, address, marriage,  nationa,
					 reservation_date,  phone_number,  date,
					 physical_examination,  combo, status);
			list.add(reservation);
		}
		return list;
	}

	public static void changeStatusOfReservation(int id) {
		try {
			conn = DBUtil.getConnection();
			String sql = "update reservation set status=1 where id=?";
			ps = conn.prepareStatement(sql);
			ps.setInt(1, id);			
			ps.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
		// TODO Auto-generated method stub
		
	}
}
