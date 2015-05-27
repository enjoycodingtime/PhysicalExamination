package com.pe.dao;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.pe.entity.Registration;
import com.pe.entity.Reservation;
import com.pe.util.DBUtil;



public class ReservationDao {
	private static Connection conn=null;
	private static PreparedStatement ps =null;
	private static ResultSet rs =null;
	public static void insertReservation (String name,String sex, String birthday, String address,String phone_number,String idCard,String marriage,String nationa,
			String date,String reservation_date,String physical_examination, String combo, String totalAmount) throws Exception{
		conn = DBUtil.getConnection();
		String sql = "insert into reservation(name, sex, birthday, address,phone_number,idCard,marriage,nationa,"
				+ "date, reservation_date,physical_examination,combo,status,totalAmount) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
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
		ps.setString(14, totalAmount);
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
			String totalAmount = rs.getString("totalAmount");
			int status = rs.getInt("status");
			
			Reservation reservation =new Reservation(id, name, sex, birthday,
					 idCard, address, marriage,  nationa,
					 reservation_date,  phone_number,  date,
					 physical_examination,  combo,totalAmount, status);
			list.add(reservation);
		}
		return list;
	}

	public List<Reservation> getReservationByDate(String rule,String date1) throws Exception{
		
		List<Reservation> list = new ArrayList<Reservation>();
		conn=DBUtil.getConnection();
		if(rule.equals("reservation_date")) {
			String sql ="select * from reservation where reservation_date=?";
			ps =conn.prepareStatement(sql);
			ps.setString(1, date1);
			rs= ps.executeQuery();
		}else if(rule.equals("date")) {
			String sql ="select * from reservation where date=?";
			ps =conn.prepareStatement(sql);
			ps.setString(1, date1);
			rs= ps.executeQuery();
		}else {
			String sql ="select * from reservation";
			ps =conn.prepareStatement(sql);
			rs= ps.executeQuery();
		}	
	
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
			String totalAmount = rs.getString("totalAmount");
			int status = rs.getInt("status");
			
			Reservation reservation =new Reservation(id, name, sex, birthday,
					 idCard, address, marriage,  nationa,
					 reservation_date,  phone_number,  date,
					 physical_examination,  combo,totalAmount, status);
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
			String totalAmount = rs.getString("totalAmount");
			int status = rs.getInt("status");
			
			Reservation reservation =new Reservation(id1, name, sex, birthday,
					 idCard, address, marriage,  nationa,
					 reservation_date,  phone_number,  date,
					 physical_examination,  combo,totalAmount, status);
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

	public static void updateReservation(int id, String name, String sex,
			String birthday, String address, String phone_number,
			String idCard, String marriage, String nationa, String date,
			String reservation_date, String physical_examination, String combo, String totalAmount) throws Exception{
		// TODO Auto-generated method stub
		
		conn = DBUtil.getConnection();
		String sql = "update reservation set name=?, sex=?, birthday=?, address=?,phone_number=?,idCard=?,marriage=?,nationa=?,"
				+ "date=?, reservation_date=?,physical_examination=?,combo=?,status=?,totalAmount=? where id=?";
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
		ps.setString(14, totalAmount);
		ps.setInt(15, id);
		ps.executeUpdate();
		
	}

	public static void deleteReservation(int id) {
		// TODO Auto-generated method stub
		try {
			conn = DBUtil.getConnection();
			String sql = "delete from reservation where id=?";
			ps = conn.prepareStatement(sql);
			ps.setInt(1, id);
			ps.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public List<Reservation> getReservationByRule(String rule, String value, String orderBy) throws Exception {
		// TODO Auto-generated method stub
		List<Reservation> list = new ArrayList<Reservation>();
		conn=DBUtil.getConnection();
		String order = "ORDER BY "+orderBy;
		switch(rule) {
		case "id":
			String sql ="select * from reservation where id=? "+order;
			ps =conn.prepareStatement(sql);
			int id = Integer.parseInt(value);
			ps.setInt(1, id);
			rs= ps.executeQuery();
			break; 
		case "name":
			String sql1 ="select * from reservation where name=? "+order;
			ps =conn.prepareStatement(sql1);			
			ps.setString(1, value);
			rs= ps.executeQuery();
			break; 
		case "sex":
			String sex = value;
			if(value.equals("男")){
				sex = "man";
			}else if(value.equals("女")) {
				sex = "woman";
			}
			String sql2 ="select * from reservation where sex=? "+order;
			ps =conn.prepareStatement(sql2);			
			ps.setString(1, sex);
			rs= ps.executeQuery();
			break;
		case "birthday":
			String sql3 ="select * from reservation where birthday=? "+order;
			ps =conn.prepareStatement(sql3);			
			ps.setString(1, value);
			rs= ps.executeQuery();
			break;
		case "phone_number":
			String sql4 ="select * from reservation where phone_number=? "+order;
			ps =conn.prepareStatement(sql4);			
			ps.setString(1, value);
			rs= ps.executeQuery();
			break;
		case "day":
			String sql5 ="select * from reservation where date=? "+order;
			ps =conn.prepareStatement(sql5);			
			ps.setString(1, value);
			rs= ps.executeQuery();
			break;
		case "combo":
			String sql6 ="select * from reservation where combo=? "+order;
			ps =conn.prepareStatement(sql6);			
			ps.setString(1, value);
			rs= ps.executeQuery();
			break;		
		case "reservation_date":
			String sql7 ="select * from reservation where reservation_date=? "+order;
			ps =conn.prepareStatement(sql7);			
			ps.setString(1, value);
			rs= ps.executeQuery();
			break;
		default:
			String sql8 ="select * from reservation "+order;
			ps =conn.prepareStatement(sql8);			
			rs= ps.executeQuery();
		}
		
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
			String totalAmount = rs.getString("totalAmount");
			int status = rs.getInt("status");
			
			Reservation reservation =new Reservation(id, name, sex, birthday,
					 idCard, address, marriage,  nationa,
					 reservation_date,  phone_number,  date,
					 physical_examination,  combo,totalAmount, status);
			list.add(reservation);
		}
		return list;
	}
}
