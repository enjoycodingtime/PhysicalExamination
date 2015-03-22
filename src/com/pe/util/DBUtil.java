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
			System.out.println("驱动加载出错");
			e.printStackTrace();
		}
	}
	/**
	 * 此类为创建连接
	 * @return
	 * @throws Exception
	 */
	public static Connection getConnection() throws Exception{
		
		Connection conn = null;//jdbc:sqlserver://localhost;DatabaseName=test;user=sa;password=111111
		try {
			conn=DriverManager.getConnection("jdbc:sqlserver://localhost;DatabaseName=PE;user=sa;password=111111");
		} catch (Exception e) {
			System.out.println("连接出错！");
			e.printStackTrace();
			throw e;
		}
		return conn;
	}
	/**
	 * 关闭连接
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
			System.out.println("关闭异常");
		}
	}
}
