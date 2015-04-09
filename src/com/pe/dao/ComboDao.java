package com.pe.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.pe.entity.Combo;
import com.pe.entity.ExaminationProject;
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
	
	public List<Combo> getCombos() throws Exception {
		List<Combo> list = new ArrayList<Combo>();
		conn = DBUtil.getConnection();
		String sql = "select * from combo";

		ps = conn.prepareStatement(sql);
		rs = ps.executeQuery();
		while (rs.next()) {
			int id = rs.getInt("id");
			String combo_name = rs.getString("combo_name");
			String combo_items = rs.getString("combo_items");

			Combo combo = new Combo(id,combo_name, combo_items);
			list.add(combo);
		}
		return list;
	}
}
