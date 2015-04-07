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
			String office_number = rs.getString("office_number");
			
			Office office =new Office(id,office_name,office_number);
			list.add(office);
		}
		return list;
	}
	public static void addOffice(String office_name,String office_number){
		try {
			conn = DBUtil.getConnection();
			String sql = "insert into office(office_name,office_number) values('"+office_name+"','"+office_number+"')";
			Statement stmt=conn.createStatement();
			stmt.executeUpdate(sql);		
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	public static void modifyOffice(int id,String office_name,String office_number){
		try {
			conn = DBUtil.getConnection();
			String sql = "update office set office_name=?,office_number=? where id=?";
			ps = conn.prepareStatement(sql);
			ps.setInt(3, id);
			ps.setString(1, office_name);
			ps.setString(2, office_number);
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
}
