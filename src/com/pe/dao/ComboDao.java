package com.pe.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import com.pe.util.DBUtil;

public class ComboDao {
	private static Connection conn = null;
	private static PreparedStatement ps = null;
	private static ResultSet rs = null;
	
	public static void addCombo(String combo_name,String combo_items){
		try {
			conn = DBUtil.getConnection();
			String sql = "insert into combo(combo_name,combo_items) values('"+combo_name+"','"+combo_items+"')";
			Statement stmt=conn.createStatement();
			stmt.executeUpdate(sql);		
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
}
