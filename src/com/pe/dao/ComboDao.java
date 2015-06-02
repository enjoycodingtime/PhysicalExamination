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
	
	public static String addCombo(String combo_name,String combo_price, String combo_items){
		try {
			conn = DBUtil.getConnection();
			String sql = "insert into combo(combo_name,combo_price,combo_items) values(?,?,?)";
			ps = conn.prepareStatement(sql);
			ps.setString(1, combo_name);
			ps.setString(2, combo_price);
			ps.setString(3, combo_items);
			ps.executeUpdate();		
			return "添加成功";
		} catch (Exception e) {
			
			return "添加失败";
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
			String combo_price = rs.getString("combo_price");
			String combo_items = rs.getString("combo_items");

			Combo combo = new Combo(id,combo_name, combo_price,combo_items);
			list.add(combo);
		}
		return list;
	}
	
	public List<Combo> getComboById(int comboid) throws Exception {
		List<Combo> list = new ArrayList<Combo>();
		conn = DBUtil.getConnection();
		String sql = "select * from combo where id=?";
		ps = conn.prepareStatement(sql);
		ps.setInt(1, comboid);
		rs = ps.executeQuery();
		while (rs.next()) {
			int id = rs.getInt("id");
			String combo_name = rs.getString("combo_name");
			String combo_price = rs.getString("combo_price");
			String combo_items = rs.getString("combo_items");
			Combo combo = new Combo(id,combo_name,combo_price,combo_items);
			list.add(combo);
		}
		return list;
	}

	public static void deleteCombo(int id) {
		// TODO Auto-generated method stub
		try {
			conn = DBUtil.getConnection();
			String sql = "delete from combo where id=?";
			ps = conn.prepareStatement(sql);
			ps.setInt(1, id);
			ps.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public static void modifyCombo(int id,String combo_name,String combo_price,String combo_items){
		try {
			conn = DBUtil.getConnection();
			String sql = "update combo set combo_name=?,combo_items=?,combo_price=? where id=?";
			ps = conn.prepareStatement(sql);
			ps.setString(1, combo_name);
			ps.setString(2, combo_items);
			ps.setString(3, combo_price);
			ps.setInt(4, id);
			ps.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

	public List<Combo> getComboByName(String combo_name1) {
		List<Combo> list = new ArrayList<Combo>();
		try{
			conn = DBUtil.getConnection();
			String sql = "select * from combo where combo_name=?";
			ps = conn.prepareStatement(sql);
			ps.setString(1, combo_name1);
			rs = ps.executeQuery();
			while (rs.next()) {
				int id = rs.getInt("id");
				String combo_name = rs.getString("combo_name");
				String combo_price = rs.getString("combo_price");
				String combo_items = rs.getString("combo_items");
				Combo combo = new Combo(id,combo_name,combo_price,combo_items);
				list.add(combo);
			}
			return list;
		} catch (Exception e) {
			e.printStackTrace();
			return list;
		}
	}
}
