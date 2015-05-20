package com.pe.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.pe.entity.Conclusion;
import com.pe.entity.PhysicalFeature;
import com.pe.util.DBUtil;

public class PhysicalFeatureDao {
	private static Connection conn = null;
	private static PreparedStatement ps = null;
	private static ResultSet rs = null;
	public List<PhysicalFeature> getphysicalFeature() throws Exception {
		// TODO Auto-generated method stub
		List<PhysicalFeature> list = new ArrayList<PhysicalFeature>();
		conn=DBUtil.getConnection();
		String sql ="select * from physical_feature";
		ps =conn.prepareStatement(sql);
		rs= ps.executeQuery();
		while(rs.next()){
			int id = rs.getInt("id");
			String name = rs.getString("name");
			String result = rs.getString("result");
			String operator = rs.getString("operator");
			String compare_man = rs.getString("compare_man");
			String compare_woman = rs.getString("compare_woman");
			PhysicalFeature physicalFeature =new PhysicalFeature(id,name,result,operator,compare_man,compare_woman);
			list.add(physicalFeature);
		}
		return list;
	}
	public static void addphysicalFeature(String name, String result,
			String operator, String compare_man, String compare_woman) {
		// TODO Auto-generated method stub
		try {
			conn = DBUtil.getConnection();
			String sql = "insert into physical_feature(name,result,operator,compare_man,compare_woman) values(?,?,?,?,?)";
			ps = conn.prepareStatement(sql);
			ps.setString(1, name);
			ps.setString(2, result);
			ps.setString(3, operator);
			ps.setString(4, compare_man);
			ps.setString(5, compare_woman);
			ps.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	public static void modifyphysicalFeature(int id, String name,
			String result, String operator, String compare_man,
			String compare_woman) {
		// TODO Auto-generated method stub
		try {
			conn = DBUtil.getConnection();
			String sql = "update physical_feature set name=?,result=?,operator=?,compare_man=?,compare_woman=? where id=?";
			ps = conn.prepareStatement(sql);
			ps.setString(1, name);
			ps.setString(2, result);
			ps.setString(3, operator);
			ps.setString(4, compare_man);
			ps.setString(5, compare_woman);
			ps.setInt(6, id);
			ps.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	public static void deletephysicalFeature(int id) {
		// TODO Auto-generated method stub
		try {
			conn = DBUtil.getConnection();
			String sql = "delete from physical_feature where id=?";
			ps = conn.prepareStatement(sql);
			ps.setInt(1, id);
			ps.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	public List<PhysicalFeature> getphysicalFeatureById(int id1) throws Exception {
		// TODO Auto-generated method stub
		List<PhysicalFeature> list = new ArrayList<PhysicalFeature>();
		conn=DBUtil.getConnection();
		String sql ="select * from physical_feature where id=?";
		ps =conn.prepareStatement(sql);
		ps.setInt(1, id1);
		rs = ps.executeQuery();
		while(rs.next()){
			int id = rs.getInt("id");
			String name = rs.getString("name");
			String result = rs.getString("result");
			String operator = rs.getString("operator");
			String compare_man = rs.getString("compare_man");
			String compare_woman = rs.getString("compare_woman");
			PhysicalFeature physicalFeature =new PhysicalFeature(id,name,result,operator,compare_man,compare_woman);
			list.add(physicalFeature);
		}
		return list;
	}

}
