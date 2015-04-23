package com.pe.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import com.pe.dao.ComboDao;
import com.pe.dao.ExaminationProjectDao;
import com.pe.dao.OfficeDao;
import com.pe.dao.RegistrationDao;
import com.pe.dao.ReservationDao;
import com.pe.dao.UserDao;
import com.pe.entity.Combo;
import com.pe.entity.ExaminationProject;
import com.pe.entity.Office;
import com.pe.entity.Registration;
import com.pe.entity.Reservation;
import com.pe.entity.Users;

public class UserServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		String url = request.getRequestURI();
		String action = url.substring(url.lastIndexOf("/") + 1,
				url.lastIndexOf("."));
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		//
		if (action.equals("home")) {
			try {
				String password = request.getParameter("password");
				String username = request.getParameter("username");
				Users users = UserDao.findByName(username);
				if (users != null && users.getPassword().equals(password)) {
					out.print(users.getPosition());
				} else {
					out.print("error");
				}
			} catch (Exception e) {
				out.print("error");
			}
		}

		//
		if (action.equals("signIn")) {
			try {
				String password = request.getParameter("password");
				String username = request.getParameter("username");
				String position = request.getParameter("position");
				UserDao.sign_in(username, password, position);

			} catch (Exception e) {
				out.print("error");
			}

		}
		//添加预约信息
		if (action.equals("reservation")) {
			try {
				String name = request.getParameter("name");
				String sex = request.getParameter("sex");
				String date = request.getParameter("date");
				String reservation_date = request.getParameter("reservation_date");
				String phone_number = request.getParameter("phone_number");
				String address = request.getParameter("address");
				String birthday = request.getParameter("birthday");
				String idCard = request.getParameter("idCard");
				String marriage = request.getParameter("marriage");
				String combo = request.getParameter("combo");
				String national = request.getParameter("national");
				String physical_examination = request
						.getParameter("physical_examination");
				ReservationDao.insertReservation(name, sex, birthday, address,phone_number,idCard,marriage,national,
						date, reservation_date,physical_examination, combo);

				out.print("ok");

			} catch (Exception e) {
				out.print("error");
			}
		}
		//修改预约信息
		if (action.equals("updateReservation")) {
			try {
				int id = Integer.parseInt(request.getParameter("id"));
				String name = request.getParameter("name");
				String sex = request.getParameter("sex");
				String date = request.getParameter("date");
				String reservation_date = request.getParameter("reservation_date");
				String phone_number = request.getParameter("phone_number");
				String address = request.getParameter("address");
				String birthday = request.getParameter("birthday");
				String idCard = request.getParameter("idCard");
				String marriage = request.getParameter("marriage");
				String combo = request.getParameter("combo");
				String national = request.getParameter("nationa");
				String physical_examination = request
						.getParameter("physical_examination");
				ReservationDao.updateReservation(id,name, sex, birthday, address,phone_number,idCard,marriage,national,
						date, reservation_date,physical_examination, combo);

				out.print("ok");

			} catch (Exception e) {
				out.print("error");
			}
		}
		// 获取预约信息
		if (action.equals("getReservation")) {
			try {
				ReservationDao reservationDao = new ReservationDao();
				List<Reservation> list = reservationDao.getReservation();
				JSONArray jarray = JSONArray.fromObject(list);
//				System.out.println(jarray);
				out.println(jarray.toString());
			} catch (Exception e) {
				out.print("error");
			}
		}
		//通过时间查询预约信息
		if (action.equals("getReservationByDate")) {
			try {
				String rule = request.getParameter("rule");
				String date = request.getParameter("date");
				ReservationDao reservationDao = new ReservationDao();
				List<Reservation> list = reservationDao.getReservationByDate(rule,date);
				JSONArray jarray = JSONArray.fromObject(list);
//				System.out.println(jarray);
				out.println(jarray.toString());
			} catch (Exception e) {
				out.print("error");
			}
		}

		// 查询预约信息
		if (action.equals("isReservation")) {
			try {
				int id = Integer.parseInt(request.getParameter("id"));
				ReservationDao reservationDao = new ReservationDao();
				List<Reservation> list = reservationDao.getReservationById(id);
				JSONArray jarray = JSONArray.fromObject(list);
				out.println(jarray.toString());
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		//登记
		if (action.equals("registrate")) {
			try {
				int id = Integer.parseInt(request.getParameter("id"));
				String name = request.getParameter("name");
				String sex = request.getParameter("sex");
				String date = request.getParameter("date");
				String reservation_date = request.getParameter("reservation_date");
				String phone_number = request.getParameter("phone_number");
				String address = request.getParameter("address");
				String birthday = request.getParameter("birthday");
				String idCard = request.getParameter("idCard");
				String marriage = request.getParameter("marriage");
				String combo = request.getParameter("combo");
				String national = request.getParameter("national");
				String physical_examination = request
						.getParameter("physical_examination");
				ReservationDao.insertRegistrate(name, sex, birthday, address,phone_number,idCard,marriage,national,
						date, reservation_date,physical_examination, combo);
				ReservationDao.changeStatusOfReservation(id);

				out.print("ok");
			} catch (Exception e) {
				out.print("error");
			}
		}
		// 获取所有体检项目
		if (action.equals("getExaminationProject")) {
			try {
				ExaminationProjectDao examinationProjectDao = new ExaminationProjectDao();
				List<ExaminationProject> list = examinationProjectDao
						.getExaminationProjects();
				JSONArray jarray = JSONArray.fromObject(list);
				out.println(jarray.toString());
			} catch (Exception e) {
				out.print("error");
			}
		}

		// 添加体检套餐
		if (action.equals("addCombo")) {
			try {
				String combo_name = request.getParameter("combo_name");
				String combo_items = request.getParameter("combo_items");
				ComboDao.addCombo(combo_name, combo_items);
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		//获取科室信息
		if(action.equals("getOffice")){
			try {
				OfficeDao officeDao = new OfficeDao();
				List<Office> list = officeDao.getOffice();
				JSONArray jarray = JSONArray.fromObject(list);
				out.println(jarray.toString());				
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		//添加科室
		if(action.equals("addOffice")){
			try {
				String office_name = request.getParameter("office_name");
				String office_number = request.getParameter("office_number");
				OfficeDao.addOffice(office_name,office_number);
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		//修改科室
		if (action.equals("amodifyOffice")) {
			try {
				int id = Integer.parseInt(request.getParameter("office_id"));
				String office_name = request.getParameter("office_name");
				String office_number = request.getParameter("office_number");
				OfficeDao.modifyOffice(id,office_name, office_number);
			} catch (Exception e) {
				out.print("error");
			}
		}
		// 删除科室
		if (action.equals("deleteOffice")) {
			try {
				int id = Integer.parseInt(request.getParameter("office_id"));
				String office_name = request.getParameter("office_name");
				OfficeDao.deleteOffice(id,office_name);
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		//根据科室名查询项目
		if (action.equals("getExaminationProjectByOfficeName")) {
			try {
				String office_name = request.getParameter("office_name");
				ExaminationProjectDao examinationProjectDao = new ExaminationProjectDao();
				List<ExaminationProject> list = examinationProjectDao
						.getExaminationProjectsByOffice(office_name);
				JSONArray jarray = JSONArray.fromObject(list);
				out.println(jarray.toString());
			} catch (Exception e) {
				out.print("error");
			}
		}
		//添加体检项目
		if(action.equals("addExaminationProject")){
			try {
				String office_name = request.getParameter("office_name");
				String project_name = request.getParameter("project_name");
				String reference_standard = request.getParameter("reference_standard");
				ExaminationProjectDao.addProject(office_name,project_name,reference_standard);
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		// 删除体检项目
		if (action.equals("deleteExaminationProject")) {
			try {
				int id = Integer.parseInt(request.getParameter("id"));
				ExaminationProjectDao.deleteProject(id);
			} catch (Exception e) {
				out.print("error");
			}
		}
		//修改科室
		if (action.equals("modifyProject")) {
			try {
				int id = Integer.parseInt(request.getParameter("project_id"));
				String project_name = request.getParameter("project_name");
				String reference_standard = request.getParameter("reference_standard");
				ExaminationProjectDao.modifyProject(id, project_name, reference_standard);
			} catch (Exception e) {
				out.print("error");
			}
		}
		//查询套餐		
		if (action.equals("getCombos")) {
			try {
				ComboDao comboDao = new ComboDao();
				List<Combo> list = comboDao.getCombos();
				JSONArray jarray = JSONArray.fromObject(list);
				out.println(jarray.toString());				
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		//根据套餐id查询套餐信息
		if (action.equals("getComboById")) {
			try {
				int id = Integer.parseInt(request.getParameter("id"));
				ComboDao comboDao = new ComboDao();
				List<Combo> list = comboDao.getComboById(id);
				JSONArray jarray = JSONArray.fromObject(list);
				out.println(jarray.toString());				
			} catch (Exception e) {
				out.print("error");
			}
		}
		//删除套餐
		if (action.equals("deleteCombo")) {
			try {
				int id = Integer.parseInt(request.getParameter("office_id"));
				ComboDao.deleteCombo(id);
			} catch (Exception e) {
				out.print("error");
			}
		}
		//修改套餐
		if (action.equals("modifyCombo")) {
			try {
				int id = Integer.parseInt(request.getParameter("id"));
				String combo_name = request.getParameter("combo_name");
				String combo_items = request.getParameter("combo_items");
				ComboDao.modifyCombo(id, combo_name, combo_items);
			} catch (Exception e) {
				out.print("error");
			}
		}
		//获取用户信息
		if (action.equals("getEmployees")) {
			try {
				UserDao userDao = new UserDao();
				List<Users> list = userDao.findAll();
				JSONArray jarray = JSONArray.fromObject(list);
				out.println(jarray.toString());	
			} catch (Exception e) {
				out.print("error");
			}
		}
		if (action.equals("modifyEmployee")) {
			try {
				int id = Integer.parseInt(request.getParameter("id"));
				String name = request.getParameter("name");
				String position = request.getParameter("position");
				UserDao.modifyEmployee(id, name, position);
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		if (action.equals("deleteEmployee")) {
			try {
				int id = Integer.parseInt(request.getParameter("id"));
				UserDao.deleteEmployee(id);
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		//体检登记表
		if (action.equals("getRegistrationList")) {
			try {
				RegistrationDao registrationDao = new RegistrationDao();
				List<Registration> list = registrationDao.getRegistration();
				JSONArray jarray = JSONArray.fromObject(list);
				out.println(jarray.toString());
			} catch (Exception e) {
				out.print("error");
			}
		}
		//添加分检结果
		if (action.equals("tijiaofenjianjieguo")) {
			try {
				int id = Integer.parseInt(request.getParameter("id"));
				String physical_examination_result = request
						.getParameter("physical_examination_result");
				RegistrationDao.addExamineResult(id,
						physical_examination_result);
			} catch (Exception e) {
				out.print("error");
			}
		}
		//添加总检结果
		if (action.equals("tijiaozongjianjieguo")) {
			try {
				int id = Integer.parseInt(request.getParameter("id"));
				String comments = request.getParameter("comments");
				RegistrationDao.addAllExamineResult(id,
						comments);
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		
	}
}
