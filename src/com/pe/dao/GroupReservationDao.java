package com.pe.dao;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.pe.entity.GroupReservation;
import com.pe.entity.Reservation;
import com.pe.util.DBUtil;

public class GroupReservationDao {
	private static Connection conn=null;
	private static PreparedStatement ps =null;
	private static ResultSet rs =null;
	public static void insertReservation(String groupName, String address,
			String allCount, int comboDiscount, int combo_id, int group_number,
			String leaderName, String physical_examination, Date date, String leaderPhoneNumber){
		try {
			conn = DBUtil.getConnection();
			String sql = "insert into "
					+ "groupReservation"
					+ "(groupName, address,allCount, combo_discount, combo_id,group_number,leaderName,physical_examination,leaderPhoneNumber,reservation_date) "
					+ "values(?,?,?,?,?,?,?,?,?,?)";
			ps =conn.prepareStatement(sql);
			ps.setString(1, groupName);
			ps.setString(2, address);
			ps.setString(3, allCount);
			ps.setInt(4, comboDiscount);
			ps.setInt(5, combo_id);
			ps.setInt(6, group_number);
			ps.setString(7, leaderName);
			ps.setString(8, physical_examination);
			ps.setString(9, leaderPhoneNumber);
			java.sql.Date sqlDate=new java.sql.Date(date.getTime());
			ps.setDate(10, sqlDate);
			ps.executeUpdate();
		} catch (Exception e) {
			e.printStackTrace();
			// TODO: handle exception
		}
	}
	public List<GroupReservation> getReservationByRule(String rule,
			String value, String orderBy) throws Exception {
		List<GroupReservation> list = new ArrayList<GroupReservation>();
		conn=DBUtil.getConnection();
		String order = "ORDER BY "+orderBy;
		String basesql = "select "
				+ "g.id,"
				+ "g.groupName,"
				+ "g.address,"
				+ "g.leaderName,"
				+ "g.leaderPhoneNumber,"
				+ "group_number,"
				+ "c.combo_name,"
				+ "g.combo_discount,"
				+ "g.allCount,"
				+ "g.reservation_date,"
				+ "g.time,"
				+ "physical_examination,"
				+ "status "
				+ "from "
				+ "groupReservation as g "
				+ "INNER JOIN "
				+ "combo as c "
				+ "ON "
				+ "g.combo_id=c.id  ";
		switch(rule) {
		case "id":
			String sql =basesql+"where g.id=? "+order;
			ps =conn.prepareStatement(sql);
			int id = Integer.parseInt(value);
			ps.setInt(1, id);
			rs= ps.executeQuery();
			break; 
		case "groupName":
			String sql1 =basesql+"where groupName=? "+order;
			ps =conn.prepareStatement(sql1);			
			ps.setString(1, value);
			rs= ps.executeQuery();
			break; 
		case "leaderName":
			String sql3 =basesql+"where leaderName=? "+order;
			ps =conn.prepareStatement(sql3);			
			ps.setString(1, value);
			rs= ps.executeQuery();
			break;
		case "leaderPhoneNumber":
			String sql4 =basesql+"where leaderPhoneNumber=? "+order;
			ps =conn.prepareStatement(sql4);			
			ps.setString(1, value);
			rs= ps.executeQuery();
			break;
		case "reservation_date":
			String sql7 =basesql+"where reservation_date=? "+order;
			ps =conn.prepareStatement(sql7);			
			ps.setString(1, value);
			rs= ps.executeQuery();
			break;
		case "combo_id":
			String sql5 =basesql+"where combo_id=? "+order;
			ps =conn.prepareStatement(sql5);			
			ps.setString(1, value);
			rs= ps.executeQuery();
			break;
		case "time":
			String sql19 =basesql+"where time between '? 00:00:00' and '? 23:59:59'"+order;
			String sql12 = sql19.replace("?",value);
			ps =conn.prepareStatement(sql12);			
			rs= ps.executeQuery();
			break;
		default:
			String sql8 =basesql+""+order;
			ps =conn.prepareStatement(sql8);			
			rs= ps.executeQuery();
		}
		
		while(rs.next()){
			int id = rs.getInt("id");
			String groupName = rs.getString("groupName");
			String address = rs.getString("address");
			String leaderName = rs.getString("leaderName");
			String leaderPhoneNumber = rs.getString("leaderPhoneNumber");
			int group_number = rs.getInt("group_number");
			String combo_name = rs.getString("combo_name");
			int combo_discount = rs.getInt("combo_discount");
			String allCount = rs.getString("allCount");
			String  reservation_date = rs.getString("reservation_date");
			String time = rs.getString("time");
			String physical_examination = rs.getString("physical_examination");
			int status = rs.getInt("status");
			GroupReservation reservation =new GroupReservation(id, combo_discount,combo_name,
					group_number,  groupName,  address,
					 allCount,  leaderName,  leaderPhoneNumber,
					time,  physical_examination, reservation_date,
					 status);
			list.add(reservation);
		}
		return list;
	}
}
