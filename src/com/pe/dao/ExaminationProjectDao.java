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
		String sql = "select "
				+ "examination_project.id,"
				+ "examination_project.project_name,"
				+ "examination_project.price,"
				+ "examination_project.combo_price,"
				+ "examination_project.physical_feature_id,"
				+ "Office.office_name "
				+ "FROM examination_project"
				+ " INNER JOIN Office "
				+ "ON examination_project.office_id=Office.id";

		ps = conn.prepareStatement(sql);
		rs = ps.executeQuery();
		while (rs.next()) {
			int id = rs.getInt("id");
			String office_name = rs.getString("office_name");
			String project_name = rs.getString("project_name");
			String price = rs.getString("price");
			String combo_price = rs.getString("combo_price");
			String physical_feature_id = rs.getString("physical_feature_id");

			ExaminationProject examinationProject = new ExaminationProject(id, office_name,  project_name,
					price, combo_price, physical_feature_id);
			list.add(examinationProject);
		}
		return list;
	}
	
	public List<ExaminationProject> getExaminationProjectsByOffice(int office_id) throws Exception {
		List<ExaminationProject> list = new ArrayList<ExaminationProject>();
		conn = DBUtil.getConnection();
		String sql = "select "
				+ "examination_project.id,"
				+ "examination_project.project_name,"
				+ "examination_project.price,"
				+ "examination_project.combo_price,"
				+ "examination_project.physical_feature_id,"
				+ "Office.office_name "
				+ "FROM examination_project "
				+ "INNER JOIN Office "
				+ "ON examination_project.office_id=Office.id "
				+ "where office_id=?";
		ps = conn.prepareStatement(sql);
		ps.setInt(1, office_id);
		rs= ps.executeQuery();
		while (rs.next()) {
			int id = rs.getInt("id");
			String office_name = rs.getString("office_name");
			String project_name = rs.getString("project_name");
			String price = rs.getString("price");
			String combo_price = rs.getString("combo_price");
			String physical_feature_id = rs.getString("physical_feature_id");

			ExaminationProject examinationProject = new ExaminationProject(id, office_name,  project_name,
					price, combo_price, physical_feature_id);
			list.add(examinationProject);
		}
		return list;
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
	
	public static void addProject(int office_id, String project_name,
			String price, String combo_price, String physical_feature_id) {
		// TODO Auto-generated method stub
		try {
			conn = DBUtil.getConnection();
			String sql = "insert into examination_project(office_id,project_name,price,combo_price,physical_feature_id) values(?,?,?,?,?)";			
			ps = conn.prepareStatement(sql);
			ps.setInt(1, office_id);
			ps.setString(2, project_name);
			ps.setString(3, price);
			ps.setString(4, combo_price);
			ps.setString(5, physical_feature_id);
			ps.executeUpdate();			
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void modifyProject(int project_id, String project_name,
			String price, String combo_price, String physical_feature_id) {
		// TODO Auto-generated method stub
		try {
			conn = DBUtil.getConnection();
			String sql = "update examination_project set project_name=?,price=?,combo_price=?,physical_feature_id=? where id=?";
			ps = conn.prepareStatement(sql);
			ps.setString(1, project_name);
			ps.setString(2, price);
			ps.setString(3, combo_price);
			ps.setString(4, physical_feature_id);
			ps.setInt(5, project_id);
			ps.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	

}
