package com.pe.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.pe.entity.Conclusion;
import com.pe.entity.Office;
import com.pe.util.DBUtil;

public class ConclusionDao {
	private static Connection conn = null;
	private static PreparedStatement ps = null;
	private static ResultSet rs = null;
	public static void addConclusion(String name, String conclusion, String explain_disease, String suggestion) {
		// TODO Auto-generated method stub
		try {
			conn = DBUtil.getConnection();
			String sql = "insert into conclusion(name,conclusion,explain_disease,suggestion) values(?,?,?,?)";
			ps = conn.prepareStatement(sql);
			ps.setString(1, name);
			ps.setString(2, conclusion);
			ps.setString(3, explain_disease);
			ps.setString(4,suggestion);
			ps.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	public List<Conclusion> getConclusion() throws Exception{
		List<Conclusion> list = new ArrayList<Conclusion>();
		conn=DBUtil.getConnection();
		String sql ="select * from conclusion";
		ps =conn.prepareStatement(sql);
		rs= ps.executeQuery();
		while(rs.next()){
			int id = rs.getInt("id");
			String name = rs.getString("name");
			String conclusion = rs.getString("conclusion");
			String explain_disease = rs.getString("explain_disease");
			String suggestion = rs.getString("suggestion");
			
			Conclusion conclusion1 =new Conclusion(id,name,conclusion,explain_disease,suggestion);
			list.add(conclusion1);
		}
		return list;
	}
	public static void deleteConclusion(int id){
		try {
			conn = DBUtil.getConnection();
			String sql = "delete from conclusion where id=?";
			ps = conn.prepareStatement(sql);
			ps.setInt(1, id);
			ps.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	public static void modifyConclusion(int id,String name,String conclusion, String explain_disease, String suggestion){
		try {
			conn = DBUtil.getConnection();
			String sql = "update conclusion set name=?,conclusion=?,explain_disease=?,suggestion=? where id=?";
			ps = conn.prepareStatement(sql);
			ps.setString(1, name);
			ps.setString(2, conclusion);
			ps.setString(3, explain_disease);
			ps.setString(4, suggestion);
			ps.setInt(5, id);
			ps.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

	
}
