package com.pe.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.pe.entity.Registration;
import com.pe.entity.Reservation;
import com.pe.util.DBUtil;

public class RegistrationDao {
	private static Connection conn = null;
	private static PreparedStatement ps = null;
	private static ResultSet rs = null;

	public List<Registration> getRegistration() throws Exception {
		List<Registration> list = new ArrayList<Registration>();
		conn = DBUtil.getConnection();
		String sql = "select * from registration";

		ps = conn.prepareStatement(sql);
		rs = ps.executeQuery();
		while (rs.next()) {
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
			String comments = rs.getString("comments");

			Registration registration = new Registration(id, name, sex, birthday,
					 idCard, address, marriage,  nationa,
					 reservation_date,  phone_number,  date,
					 physical_examination,  combo, comments);
			list.add(registration);
		}
		return list;
	}

	public static void addExamineResult(int id,
			String physical_examination_result) {
		
		try {
			conn = DBUtil.getConnection();
			String sql = "update registration set physical_examination=? where id=?";
			ps = conn.prepareStatement(sql);
			ps.setInt(2, id);
			ps.setString(1, physical_examination_result);
			ps.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
		// TODO Auto-generated method stub
		
	}

	public static void addAllExamineResult(int id, String comments) {
		try {
			conn = DBUtil.getConnection();
			String sql = "update registration set comments=? where id=?";
			ps = conn.prepareStatement(sql);
			ps.setInt(2, id);
			ps.setString(1, comments);
			ps.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
		// TODO Auto-generated method stub
		
	}

	public List<Registration> getRegistrateByDate(String date1) throws Exception {
		List<Registration> list = new ArrayList<Registration>();
		conn=DBUtil.getConnection();
		String sql ="select * from registration where date=?";
		ps =conn.prepareStatement(sql);
		ps.setString(1, date1);
		rs= ps.executeQuery();
		while (rs.next()) {
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
			String comments = rs.getString("comments");

			Registration registration = new Registration(id, name, sex, birthday,
					 idCard, address, marriage,  nationa,
					 reservation_date,  phone_number,  date,
					 physical_examination,  combo, comments);
			list.add(registration);
		}
		return list;
	}

	public List<Registration> getRegistrateById(int id1) throws Exception {
		// TODO Auto-generated method stub
		List<Registration> list = new ArrayList<Registration>();
		conn=DBUtil.getConnection();
		String sql ="select * from registration where id=?";
		ps =conn.prepareStatement(sql);
		ps.setInt(1, id1);
		rs= ps.executeQuery();
		while (rs.next()) {
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
			String comments = rs.getString("comments");

			Registration registration = new Registration(id, name, sex, birthday,
					 idCard, address, marriage,  nationa,
					 reservation_date,  phone_number,  date,
					 physical_examination,  combo, comments);
			list.add(registration);
		}
		return list;
	}

	public List<Registration> getRegistrateByRule(String rule, String value, String orderBy) throws Exception {
		// TODO Auto-generated method stub
		List<Registration> list = new ArrayList<Registration>();
		conn=DBUtil.getConnection();
		String order = "ORDER BY "+orderBy;
		switch(rule) {
		case "id":
			String sql ="select * from registration where id=? "+order;
			ps =conn.prepareStatement(sql);
			int id = Integer.parseInt(value);
			ps.setInt(1, id);
			rs= ps.executeQuery();
			break; 
		case "name":
			String sql1 ="select * from registration where name=? "+order;
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
			String sql2 ="select * from registration where sex=? "+order;
			ps =conn.prepareStatement(sql2);			
			ps.setString(1, sex);
			rs= ps.executeQuery();
			break;
		case "birthday":
			String sql3 ="select * from registration where birthday=? "+order;
			ps =conn.prepareStatement(sql3);			
			ps.setString(1, value);
			rs= ps.executeQuery();
			break;
		case "phone_number":
			String sql4 ="select * from registration where phone_number=? "+order;
			ps =conn.prepareStatement(sql4);			
			ps.setString(1, value);
			rs= ps.executeQuery();
			break;
		case "day":
			String sql5 ="select * from registration where date=? "+order;
			ps =conn.prepareStatement(sql5);			
			ps.setString(1, value);
			rs= ps.executeQuery();
			break;
		case "combo":
			String sql6 ="select * from registration where combo=? "+order;
			ps =conn.prepareStatement(sql6);			
			ps.setString(1, value);
			rs= ps.executeQuery();
			break;		
		case "reservation_date":
			String sql7 ="select * from registration where reservation_date=? "+order;
			ps =conn.prepareStatement(sql7);			
			ps.setString(1, value);
			rs= ps.executeQuery();
			break;
		default:
			String sql8 ="select * from registration "+order;
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
			String comments = rs.getString("comments");

			Registration registration = new Registration(id, name, sex, birthday,
					 idCard, address, marriage,  nationa,
					 reservation_date,  phone_number,  date,
					 physical_examination,  combo, comments);
			list.add(registration);
		}
		return list;
	}

	public List<Registration> getRegistrateByMonth(String date1) throws Exception {
		List<Registration> list = new ArrayList<Registration>();
		conn=DBUtil.getConnection();
		String sql ="select * from registration where time LIKE '?%'";
		String sql2 = sql.replace("?",date1);
		ps =conn.prepareStatement(sql2);
		rs= ps.executeQuery();
		while (rs.next()) {
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
			String comments = rs.getString("comments");

			Registration registration = new Registration(id, name, sex, birthday,
					 idCard, address, marriage,  nationa,
					 reservation_date,  phone_number,  date,
					 physical_examination,  combo, comments);
			list.add(registration);
		}
		return list;
	}
}
