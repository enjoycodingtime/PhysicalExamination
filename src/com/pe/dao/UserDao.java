package com.pe.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import com.pe.entity.Users;
import com.pe.util.DBUtil;

public class UserDao {
	private static Connection conn = null;
	private static PreparedStatement ps = null;
	private static ResultSet rs = null;

	public static List<Users> findAll() throws Exception {
		List<Users> list = new ArrayList<Users>();
		conn = DBUtil.getConnection();
		String sql = "select Users.id,Users.name,Users.password,Users.position,Office.office_name from Users INNER JOIN Office ON Users.office_id=Office.id";
		Statement stmt = conn.createStatement();
		ResultSet rs = stmt.executeQuery(sql);
		while (rs.next()) {
			String id = rs.getString("id");
			String name = rs.getString("name");
			String pwd = rs.getString("password");
			String position = rs.getString("position");
			String office_name = rs.getString("office_name");
			Users user = new Users(id, name, pwd, position, office_name);
			list.add(user);
		}
		return list;
	}

	public static Users findById(String id1) throws Exception {
//		if (!DBUtil.isHaveTable("combo")) {
//			DBUtil.initComboDb();
//		}
//		if (!DBUtil.isHaveTable("examination_project")) {
//			DBUtil.initExaminationProject();
//		}
//		if (!DBUtil.isHaveTable("office")) {
//			DBUtil.initOffice();
//		}
//		if (!DBUtil.isHaveTable("reservation")) {
//			DBUtil.initReservation();
//		}
//		if (!DBUtil.isHaveTable("registration")) {
//			DBUtil.initRegistration();
//		}
		Users users = null;
		conn = DBUtil.getConnection();
		String sql = "select Users.id,Users.name,Users.password,Users.position,Office.office_name from Users INNER JOIN Office ON Users.office_id=Office.id  where Users.id=?";
		ps = conn.prepareStatement(sql);
		ps.setString(1, id1);
		rs= ps.executeQuery();
		while (rs.next()) {
			String id = rs.getString("id");
			String username = rs.getString("name");
			String password = rs.getString("password");
			String position = rs.getString("position");
			String office = rs.getString("office_name");
			users = new Users(id, username, password, position, office);
		}
		return users;
	}

	public static String sign_in(String username, String password, String position, int office_id) {
		String employeeCode = generateEmployeeCode(position);
		try {
			conn = DBUtil.getConnection();
			String sql = "insert into Users(id,name,password,position,office_id) values(?,?,?,?,?)";
			ps = conn.prepareStatement(sql);
			ps.setString(1,employeeCode);
			ps.setString(2,username);
			ps.setString(3,password);
			ps.setString(4,position);
			ps.setInt(5,office_id);
			ps.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
			// TODO: handle exception
		}
		return employeeCode;

		// return null;
	}

	private static String generateEmployeeCode(String position) {
		Calendar cal = Calendar.getInstance();
		String year = String.valueOf(cal.get(Calendar.YEAR));//获取年份
		year = year.substring(2);
		String month=String.valueOf(cal.get(Calendar.MONTH));//获取月份
		String positionCode = null;
		String count = null;
		switch (position) {
		case "管理员":
			positionCode = "AD";
			break;
		case "总台医师":
			positionCode = "ZD";
			break;
		case "总台主管":
			positionCode = "ZM";
			break;
		case "分检医师":
			positionCode = "FJ";
			break;
		case "总检医师":
			positionCode = "ZJ";
			break;
		case "科室主管":
			positionCode = "ZG";
			break;
		case "院长":
			positionCode = "YZ";
			break;
		case "副院长":
			positionCode = "FZ";
			break;
		default:
			break;
		}
		try {
			conn = DBUtil.getConnection();
			String sql = "select count(*) as cc from Users";
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(sql);
			rs.next();
			count = String.valueOf(rs.getInt(1)+1);
		} catch (Exception e) {
			e.printStackTrace();
			// TODO: handle exception
		}
		return positionCode + year + month + count;
	// TODO Auto-generated method stub
	
}
	public static void deleteEmployee(String id) {
		// TODO Auto-generated method stub
		try {
			conn = DBUtil.getConnection();
			String sql = "delete from Users where id=?";
			ps = conn.prepareStatement(sql);
			ps.setString(1, id);
			ps.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void changePassword(String id, String password) {
		// TODO Auto-generated method stub
		try {
			conn = DBUtil.getConnection();
			String sql = "update Users set password=? where id=?";
			ps = conn.prepareStatement(sql);
			ps.setString(2, id);
			ps.setString(1, password);
			ps.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void modifyEmployee(String id, String name, String position,
			int office_id) {
		// TODO Auto-generated method stub
		try {
			conn = DBUtil.getConnection();
			String sql = "update Users set name=?,position=?,office_id=? where id=?";
			ps = conn.prepareStatement(sql);
			ps.setString(1, name);
			ps.setString(2, position);
			ps.setInt(3, office_id);
			ps.setString(4, id);
			ps.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
