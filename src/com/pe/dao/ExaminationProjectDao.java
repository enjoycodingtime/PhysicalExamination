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

}
