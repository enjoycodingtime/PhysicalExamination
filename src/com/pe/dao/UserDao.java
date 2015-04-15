package com.pe.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.pe.entity.Users;
import com.pe.util.DBUtil;





public class UserDao {
	private static Connection conn=null;
	private static PreparedStatement ps =null;
	private static ResultSet rs =null;
	public static List<Users> findAll() throws Exception{
		List<Users> list = new ArrayList<Users>();
		conn = DBUtil.getConnection();
		String sql = "select * from Users ";
		Statement stmt=conn.createStatement();
		ResultSet rs = stmt.executeQuery(sql);
		while(rs.next()){
			int id = rs.getInt("id");
			String name = rs.getString("name");
			String pwd = rs.getString("password");
			String position = rs.getString("position");
			Users user = new Users(id, name, pwd, position);	
			list.add(user);
			
		}
		return list;
	}
	public static Users findByName(String username) throws Exception{
		if(!DBUtil.isHaveTable("combo")) {
			DBUtil.initComboDb();
		}
		if(!DBUtil.isHaveTable("examination_project")) {
			DBUtil.initExaminationProject();
		}
		if(!DBUtil.isHaveTable("office")) {
			DBUtil.initOffice();
		}
		if(!DBUtil.isHaveTable("reservation")) {
			DBUtil.initReservation();
		}
		if(!DBUtil.isHaveTable("registration")) {
			DBUtil.initRegistration();
		}
		
		Users users =null;
		conn = DBUtil.getConnection();
		String sql = "select * from Users where name='"+username+"'";
		Statement stmt=conn.createStatement();
		ResultSet rs = stmt.executeQuery(sql);
		while(rs.next()){
			int id = rs.getInt("id");
			String password = rs.getString("password");
			String position = rs.getString("position");
			users = new Users(id,username,password, position);
		}
		return users;
	}
	
public static void sign_in(String username,String password,String position){
		try {
			conn = DBUtil.getConnection();
			String sql = "insert into Users(name,password,position) values('"+username+"','"+password+"','"+position+"')";
			Statement stmt=conn.createStatement();
			stmt.executeUpdate(sql);		
		} catch (Exception e) {
			e.printStackTrace();
			// TODO: handle exception
		}
		
//		return null;
	}
public static void modifyEmployee(int id, String name, String position) {
	// TODO Auto-generated method stub
	try {
		conn = DBUtil.getConnection();
		String sql = "update Users set name=?,position=? where id=?";
		ps = conn.prepareStatement(sql);
		ps.setInt(3, id);
		ps.setString(1, name);
		ps.setString(2, position);
		ps.executeUpdate();
	} catch (Exception e) {
		e.printStackTrace();
	}
}
public static void deleteEmployee(int id) {
	// TODO Auto-generated method stub
	try {
		conn = DBUtil.getConnection();
		String sql = "delete from Users where id=?";
		ps = conn.prepareStatement(sql);
		ps.setInt(1, id);
		ps.executeUpdate();
	} catch (Exception e) {
		e.printStackTrace();
	}
}
	
}
