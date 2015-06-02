package com.pe.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.pe.entity.Office;
import com.pe.entity.Reservation;
import com.pe.util.DBUtil;

public class OfficeDao {
	private static Connection conn=null;
	private static PreparedStatement ps =null;
	private static ResultSet rs =null;
	
	public List<Office> getOffice() throws Exception{
		List<Office> list = new ArrayList<Office>();
		conn=DBUtil.getConnection();
		String sql ="select * from Office";
		
		ps =conn.prepareStatement(sql);
		rs= ps.executeQuery();
		while(rs.next()){
			int id = rs.getInt("id");
			String office_name = rs.getString("office_name");
			int office_type = rs.getInt("office_type");
			String office_number = rs.getString("office_number");
			
			Office office =new Office(id,office_name,office_type,office_number);
			list.add(office);
		}
		return list;
	}
	public static void addOffice(String office_name,int office_type, String office_number){
		try {
			conn = DBUtil.getConnection();
			String sql = "insert into office(office_name,office_type,office_number) values(?,?,?)";
			ps = conn.prepareStatement(sql);
			ps.setString(1, office_name);
			ps.setInt(2, office_type);
			ps.setString(3, office_number);
			ps.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	public static void modifyOffice(int id,String office_name,int office_type, String office_number){
		try {
			conn = DBUtil.getConnection();
			String sql = "update office set office_name=?,office_number=?,office_type=? where id=?";
			ps = conn.prepareStatement(sql);
			ps.setString(1, office_name);
			ps.setString(2, office_number);
			ps.setInt(3, office_type);
			ps.setInt(4, id);
			ps.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	public static void deleteOffice(int id){
		try {
			conn = DBUtil.getConnection();
			String sql = "delete from office where id=?";
			ps = conn.prepareStatement(sql);
			ps.setInt(1, id);
			ps.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	public List<Office> getOfficeByRule(String rule, String value) {
		List<Office> list = new ArrayList<Office>();
		try {
			System.out.println(rule);
			System.out.println(value);
			conn=DBUtil.getConnection();
			if(rule.equals("office_type")) {
				String sql ="select * from Office where office_type='?'";
				if(value.equals("非功能科室")) {
					sql = sql.replace("?","0");
				}else {
					sql = sql.replace("?","1");
				}
				ps =conn.prepareStatement(sql);
				rs= ps.executeQuery();
			}else {
				String sql ="select * from Office where "+rule+"=?";
				ps =conn.prepareStatement(sql);
				ps.setString(1,value);
				rs= ps.executeQuery();
				
			}
			while(rs.next()){
				int id = rs.getInt("id");
				String office_name = rs.getString("office_name");
				int office_type = rs.getInt("office_type");
				String office_number = rs.getString("office_number");
				
				Office office =new Office(id,office_name,office_type,office_number);
				list.add(office);
			}
			return list;
		}catch (Exception e) {
			e.printStackTrace();
			return list;
		}
		
	}
}
