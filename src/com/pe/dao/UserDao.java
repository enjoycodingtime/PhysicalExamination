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
			Users user = new Users(id, name, pwd);	  //Statement stmt=conn.createStatement();
			list.add(user);
			
		}
		return list;
	}
	public static Users findByName(String username) throws Exception{
		
		Users users =null;
		conn = DBUtil.getConnection();
		String sql = "select * from Users where name='zk'";
		Statement stmt=conn.createStatement();
		ResultSet rs = stmt.executeQuery(sql);
		while(rs.next()){
			int id = rs.getInt("id");
			String password = rs.getString("password");
			users = new Users(id,username,password);
		}
		return users;
	}
	
}
