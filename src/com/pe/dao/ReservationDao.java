package com.pe.dao;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.pe.entity.Reservation;
import com.pe.util.DBUtil;



public class ReservationDao {
	private static Connection conn=null;
	private static PreparedStatement ps =null;
	private static ResultSet rs =null;
	public static void insertReservation (String name,String sex,String age,String phone_number,String date,String physical_examination) throws Exception{
		conn = DBUtil.getConnection();
		String sql = "insert into reservation(name,sex,age,phone_number,date,physical_examination) values('"+name+"','"+sex+"','"+age+"','"+phone_number+"','"+date+"','"+physical_examination+"')";
		Statement stmt=conn.createStatement();
		stmt.executeUpdate(sql);
	}
	public List<Reservation> getReservation() throws Exception{
		List<Reservation> list = new ArrayList<Reservation>();
		conn=DBUtil.getConnection();
		String sql ="select * from reservation";
		
		ps =conn.prepareStatement(sql);
		rs= ps.executeQuery();
		while(rs.next()){
			int id = rs.getInt("id");
			String name = rs.getString("name");
			String age = rs.getString("age");
			String sex = rs.getString("sex");
			String phone_number = rs.getString("phone_number");
			String date = rs.getString("date");
			String physical_examination = rs.getString("physical_examination");
			
			Reservation reservation =new Reservation(id,name,sex,age,phone_number,date,physical_examination);
			list.add(reservation);
		}
		return list;
	}
	public List<Reservation> getReservationById(int id) throws Exception{
		List<Reservation> list = new ArrayList<Reservation>();
		conn=DBUtil.getConnection();
		String sql ="select * from reservation where id=?";		
		ps =conn.prepareStatement(sql);
		ps.setInt(1, id);
		rs= ps.executeQuery();
		while(rs.next()){
			int id1 = rs.getInt("id");
			String name = rs.getString("name");
			String age = rs.getString("age");
			String sex = rs.getString("sex");
			String phone_number = rs.getString("phone_number");
			String date = rs.getString("date");
			String physical_examination = rs.getString("physical_examination");
			
			Reservation reservation =new Reservation(id1,name,sex,age,phone_number,date,physical_examination);
			list.add(reservation);
		}
		return list;
	}
}
