package com.pe.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class DBUtil {
	
	static {
		try {
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
		} catch (Exception e) {
			System.out.println("�������س���");
			e.printStackTrace();
		}
	}
	/**
	 * 
	 * @return
	 * @throws Exception
	 */
	public static Connection getConnection() throws Exception{
		
		Connection conn = null;//jdbc:sqlserver://localhost;DatabaseName=test;user=sa;password=111111
		try {
			conn=DriverManager.getConnection("jdbc:sqlserver://localhost;DatabaseName=PE;user=sa;password=111111");
		} catch (Exception e) {
			System.out.println("���ӳ���");
			e.printStackTrace();
			throw e;
		}
		return conn;
	}
	/**
	 * �ر�����
	 */
	public static void close(Connection conn,PreparedStatement ps,ResultSet rs){
		try {
			if(rs!=null){
				rs.close();
			}
			if(ps!=null){
				ps.close();
			}
			if(conn!=null){
				conn.close();
			}
		} catch (Exception e) {
			System.out.println("�ر��쳣");
		}
	}
	
	public static boolean isHaveTable(String table_name) throws Exception {
		Connection conn = null;
		conn = DBUtil.getConnection();
		ResultSet rs = conn.getMetaData().getTables(null, null, table_name, null);
		if(rs.next()) {
			return true;
		}else{
			return false;
		}
	}
	
	public static void initComboDb(){
		try {
			Connection conn = null;
			conn = DBUtil.getConnection();
			String sql = "create table combo("
					+ " id int identity(1,1) primary key,"
					+ "combo_name varchar(50),"
					+ "combo_items varchar(1000)"
					+ ")";
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.executeUpdate();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	public static void initExaminationProject(){
		try {
			Connection conn = null;
			conn = DBUtil.getConnection();
			String sql = "create table examination_project("
					+ " id int identity(1,1) primary key,"
					+ "office_name varchar(50),"
					+ "project_name varchar(50),"
					+ "reference_standard varchar(1000)"
					+ ")";
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.executeUpdate();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	public static void initOffice(){
		try {
			Connection conn = null;
			conn = DBUtil.getConnection();
			String sql = "create table office("
					+ " id int identity(1,1) primary key,"
					+ "office_name varchar(50),"
					+ "office_number varchar(50),"
					+ ")";
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.executeUpdate();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	public static void initReservation(){
		try {
			Connection conn = null;
			conn = DBUtil.getConnection();
			String sql = "create table reservation("
					+ " id int identity(1,1) primary key,"
					+ "name varchar(50),"
					+ "birthday varchar(50),"
					+ "address varchar(500),"
					+ "idCard varchar(50),"
					+ "marriage varchar(50),"
					+ "nationa varchar(50),"
					+ "sex varchar(50),"
					+ "phone_number varchar(50),"
					+ "date varchar(50),"
					+ "reservation_date varchar(50),"
					+ "combo varchar(50),"
					+ "physical_examination varchar(1000),"
					+ "status int,"
					+ ")";
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.executeUpdate();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	public static void initRegistration() {
		// TODO Auto-generated method stub
		try {
			Connection conn = null;
			conn = DBUtil.getConnection();
			String sql = "create table registration("
					+ " id int identity(1,1) primary key,"
					+ "name varchar(50),"
					+ "birthday varchar(50),"
					+ "address varchar(500),"
					+ "idCard varchar(50),"
					+ "marriage varchar(50),"
					+ "nationa varchar(50),"
					+ "sex varchar(50),"
					+ "phone_number varchar(50),"
					+ "date varchar(50),"
					+ "reservation_date varchar(50),"
					+ "combo varchar(50),"
					+ "physical_examination varchar(1000),"
					+ "comments varchar(1000),"
					+ ")";
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.executeUpdate();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
