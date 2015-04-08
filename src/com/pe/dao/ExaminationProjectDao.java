package com.pe.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.pe.entity.ExaminationProject;
import com.pe.util.DBUtil;

public class ExaminationProjectDao {
	private static Connection conn = null;
	private static PreparedStatement ps = null;
	private static ResultSet rs = null;

	public List<ExaminationProject> getExaminationProjects() throws Exception {
		List<ExaminationProject> list = new ArrayList<ExaminationProject>();
		conn = DBUtil.getConnection();
		String sql = "select * from examination_project";

		ps = conn.prepareStatement(sql);
		rs = ps.executeQuery();
		while (rs.next()) {
			int id = rs.getInt("id");
			String office_name = rs.getString("office_name");
			String project_name = rs.getString("project_name");
			String reference_standard = rs.getString("reference_standard");

			ExaminationProject examinationProject = new ExaminationProject(id,
					office_name, project_name, reference_standard);
			list.add(examinationProject);
		}
		return list;
	}
	
	public List<ExaminationProject> getExaminationProjectsByOffice(String name) throws Exception {
		List<ExaminationProject> list = new ArrayList<ExaminationProject>();
		conn = DBUtil.getConnection();
		String sql = "select * from examination_project where office_name=?";
		ps = conn.prepareStatement(sql);
		ps.setString(1, name);
		rs = ps.executeQuery();
		while (rs.next()) {
			int id = rs.getInt("id");
			String office_name = rs.getString("office_name");
			String project_name = rs.getString("project_name");
			String reference_standard = rs.getString("reference_standard");

			ExaminationProject examinationProject = new ExaminationProject(id,
					office_name, project_name, reference_standard);
			list.add(examinationProject);
		}
		return list;
	}
	
	public static void addProject(String office_name,String project_name,String reference_standard){
		try {
			conn = DBUtil.getConnection();
			String sql = "insert into examination_project(office_name,project_name,reference_standard) values(?,?,?)";			
			ps = conn.prepareStatement(sql);
			ps.setString(1, office_name);
			ps.setString(2, project_name);
			ps.setString(3, reference_standard);
			ps.executeUpdate();			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	public static void deleteProject(int id){
		try {
			conn = DBUtil.getConnection();
			String sql = "delete from examination_project where id=?";
			ps = conn.prepareStatement(sql);
			ps.setInt(1, id);
			ps.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	
	public static void modifyProject(int id,String project_name,String reference_standard){
		try {
			conn = DBUtil.getConnection();
			String sql = "update examination_project set project_name=?,reference_standard=? where id=?";
			ps = conn.prepareStatement(sql);
			ps.setInt(3, id);
			ps.setString(1, project_name);
			ps.setString(2, reference_standard);
			ps.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
	

}
