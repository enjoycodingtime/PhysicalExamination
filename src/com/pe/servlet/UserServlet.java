package com.pe.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONArray;

import com.pe.dao.ComboDao;
import com.pe.dao.ConclusionDao;
import com.pe.dao.ExaminationProjectDao;
import com.pe.dao.GroupReservationDao;
import com.pe.dao.OfficeDao;
import com.pe.dao.PhysicalFeatureDao;
import com.pe.dao.RegistrationDao;
import com.pe.dao.ReservationDao;
import com.pe.dao.UserDao;
import com.pe.entity.Combo;
import com.pe.entity.Conclusion;
import com.pe.entity.ExaminationProject;
import com.pe.entity.GroupReservation;
import com.pe.entity.Office;
import com.pe.entity.PhysicalFeature;
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
		HttpSession httpSession = request.getSession();
		//登陆
		if (action.equals("home")) {
			try {
				String password = request.getParameter("password");
				String id = request.getParameter("id");
				Users users = UserDao.findById(id);
				if (users != null && users.getPassword().equals(password)) {
					httpSession.setAttribute("id", id);
					JSONArray jarray = JSONArray.fromObject(users);
					out.print(jarray.toString());
				} else {
					out.print("error");
				}
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		//判断用户是否登陆
		if (action.equals("hasLoggedin")) {
			try {
				String id = request.getParameter("id");
				if (id.equals(httpSession.getAttribute("id"))) {
					out.print("yes");
				} else {
					out.print("error");
				}
			} catch (Exception e) {
				out.print("error");
			}
		}
		//退出登录
		if (action.equals("logout")) {
			try {
				httpSession.invalidate();
				out.print("ok");
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		//修改密码
		if (action.equals("changePassword")) {
			try {
				String id = request.getParameter("id");
				String password = request.getParameter("password");
				UserDao.changePassword(id, password);
				out.print("ok");
			} catch (Exception e) {
				out.print("error");
			}
		}		


		//注册账号
		if (action.equals("signIn")) {
			try {
				String password = request.getParameter("password");
				String username = request.getParameter("username");
				String position = request.getParameter("position");
				int office_id = Integer.parseInt(request.getParameter("office_id"));
				String id= UserDao.sign_in(username, password, position,office_id);
				out.print(id);

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
				String totalAmount = request.getParameter("totalAmount");
				if(ReservationDao.haveReservationToday(idCard,date)) {
					out.print("今天预约过了");
				}else {
					ReservationDao.insertReservation(name, sex, birthday, address,phone_number,idCard,marriage,national,
							date, reservation_date,physical_examination, combo,totalAmount);
					out.print("ok");
				}

			} catch (Exception e) {
				out.print("error");
			}
		}
		//添加团体预约信息
		if (action.equals("groupRreservation")) {
			try {
				String groupName = request.getParameter("groupName");
				String address = request.getParameter("address");
				String allCount = request.getParameter("allCount");
				int comboDiscount = Integer.parseInt(request.getParameter("comboDiscount"));
				int combo_id = Integer.parseInt(request.getParameter("combo_id"));
				int group_number = Integer.parseInt(request.getParameter("group_number"));
				String leaderName = request.getParameter("leaderName");
				String leaderPhoneNumber = request.getParameter("leaderPhoneNumber");
				String reservation_date = request.getParameter("reservation_date");
				String physical_examination = request
						.getParameter("physical_examination");
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");  
				try {
					Date date = sdf.parse(reservation_date); 
					GroupReservationDao.insertReservation(groupName, address, allCount, comboDiscount,combo_id,group_number,leaderName,physical_examination,date,leaderPhoneNumber);
				}catch (ParseException e){
					System.out.println("时间出错");
					e.printStackTrace();
				}
				
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
				String totalAmount = request.getParameter("totalAmount");
				String national = request.getParameter("nationa");
				String physical_examination = request
						.getParameter("physical_examination");
				ReservationDao.updateReservation(id,name, sex, birthday, address,phone_number,idCard,marriage,national,
						date, reservation_date,physical_examination, combo,totalAmount);

				out.print("ok");

			} catch (Exception e) {
				out.print("error");
			}
		}
		//修改团体预约信息
		if (action.equals("updateGroupReservation")) {
			try {
				int id = Integer.parseInt(request.getParameter("id"));
				String groupName = request.getParameter("groupName");
				String address = request.getParameter("address");
				String allCount = request.getParameter("allCount");
				int comboDiscount = Integer.parseInt(request.getParameter("comboDiscount"));
				int combo_id = Integer.parseInt(request.getParameter("combo_id"));
				int group_number = Integer.parseInt(request.getParameter("group_number"));
				String leaderName = request.getParameter("leaderName");
				String leaderPhoneNumber = request.getParameter("leaderPhoneNumber");
				String reservation_date = request.getParameter("reservation_date");
				String physical_examination = request
						.getParameter("physical_examination");
				SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");  
				try {
					Date date = sdf.parse(reservation_date); 
					GroupReservationDao.updateReservation(id,groupName, address, allCount, comboDiscount,combo_id,group_number,leaderName,physical_examination,date,leaderPhoneNumber);
				}catch (ParseException e){
					System.out.println("时间出错");
					e.printStackTrace();
				}
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
				out.println(jarray.toString());
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		if (action.equals("getReservationByRule")) {
			try {
				String rule = request.getParameter("rule");
				String value = request.getParameter("value");
				String orderBy;
				try{
					orderBy = request.getParameter("orderBy");					
				}catch(Exception e){
					orderBy = "id";
				}
				ReservationDao reservationDao = new ReservationDao();
				List<Reservation> list = reservationDao.getReservationByRule(rule,value,orderBy);
				JSONArray jarray = JSONArray.fromObject(list);
				out.println(jarray.toString());
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		if (action.equals("getGroupReservation")) {
			try {
				String rule = request.getParameter("rule");
				
				String value = request.getParameter("value");
				String orderBy;
				try{
					orderBy = request.getParameter("orderBy");					
				}catch(Exception e){
					orderBy = "id";
				}
				GroupReservationDao reservationDao = new GroupReservationDao();
				List<GroupReservation> list = reservationDao.getReservationByRule(rule,value,orderBy);
				JSONArray jarray = JSONArray.fromObject(list);
				out.println(jarray.toString());
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		if (action.equals("delectReservation")) {
			try {
				int id = Integer.parseInt(request.getParameter("id"));
				ReservationDao.deleteReservation(id);
			} catch (Exception e) {
				out.print("error");
			}
		}
		if (action.equals("delectGroupReservation")) {
			try {
				int id = Integer.parseInt(request.getParameter("id"));
				GroupReservationDao.deleteReservation(id);
			} catch (Exception e) {
				out.print("error");
			}
		}
		if (action.equals("getRegistrateByDate")) {
			try {
				String date = request.getParameter("date");
				RegistrationDao registrationDao = new RegistrationDao();
				List<Registration> list = registrationDao.getRegistrateByDate(date);
				JSONArray jarray = JSONArray.fromObject(list);
				out.println(jarray.toString());
			} catch (Exception e) {
				out.print("error");
			}
		}
		if (action.equals("getRegistrateByMonth")) {
			try {
				String date = request.getParameter("date");
				RegistrationDao registrationDao = new RegistrationDao();
				List<Registration> list = registrationDao.getRegistrateByMonth(date);
				JSONArray jarray = JSONArray.fromObject(list);
				out.println(jarray.toString());
			} catch (Exception e) {
				out.print("error");
			}
		}
		if (action.equals("getRegistrateById")) {
			try {
				int id = Integer.parseInt(request.getParameter("id"));
				RegistrationDao registrationDao = new RegistrationDao();
				List<Registration> list = registrationDao.getRegistrateById(id);
				JSONArray jarray = JSONArray.fromObject(list);
				out.println(jarray.toString());
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		if (action.equals("getRegistrateByRule")) {
			try {
				String rule = request.getParameter("rule");
				String value = request.getParameter("value");
				String orderBy;
				try{
					orderBy = request.getParameter("orderBy");					
				}catch(Exception e){
					orderBy = "id";
				}
				RegistrationDao registrationDao = new RegistrationDao();
				List<Registration> list = registrationDao.getRegistrateByRule(rule,value,orderBy);
				JSONArray jarray = JSONArray.fromObject(list);
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
		// 查询团体预约信息
		if (action.equals("isGroupReservation")) {
			try {
				int id = Integer.parseInt(request.getParameter("id"));
				GroupReservationDao reservationDao = new GroupReservationDao();
				List<GroupReservation> list = reservationDao.getReservationById(id);
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
				int group_id ;
				try{
					group_id = Integer.parseInt(request.getParameter("group_id"));					
				}catch(Exception e){
					group_id =-1;
				}
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
				ReservationDao.insertRegistrate(name, sex, birthday, address,phone_number,idCard,marriage,national,
						date, reservation_date,physical_examination, combo,group_id);
				ReservationDao.changeStatusOfReservation(id);

				out.print("ok");
			} catch (Exception e) {
				out.print("error");
			}
		}
		if (action.equals("changeStatusOfGroup")) {
			try {
				int id = Integer.parseInt(request.getParameter("id"));
				GroupReservationDao.changeStatusOfReservation(id);
				out.print("ok");
			} catch (Exception e) {
				out.print("error");
			}
		}
		if (action.equals("groupRegistrate")) {
			try {
				int group_id ;
				try{
					group_id = Integer.parseInt(request.getParameter("group_id"));					
				}catch(Exception e){
					group_id =-1;
				}
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
				ReservationDao.insertRegistrate(name, sex, birthday, address,phone_number,idCard,marriage,national,
						date, reservation_date,physical_examination, combo,group_id);

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
				String combo_price = request.getParameter("combo_price");
				String combo_items = request.getParameter("combo_items");
				String result = ComboDao.addCombo(combo_name,combo_price, combo_items);
				System.out.println(result);
				if(result =="添加失败") {
					out.print("添加失败");
				}
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
				int office_type = Integer.parseInt(request.getParameter("office_type"));
				OfficeDao.addOffice(office_name,office_type,office_number);
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		//修改科室
		if (action.equals("modifyOffice")) {
			try {
				int id = Integer.parseInt(request.getParameter("office_id"));
				String office_name = request.getParameter("office_name");
				String office_number = request.getParameter("office_number");
				int office_type = Integer.parseInt(request.getParameter("office_type"));
				OfficeDao.modifyOffice(id,office_name, office_type,office_number);
			} catch (Exception e) {
				out.print("error");
			}
		}
		// 删除科室
		if (action.equals("deleteOffice")) {
			try {
				int id = Integer.parseInt(request.getParameter("office_id"));
				OfficeDao.deleteOffice(id);
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		//根据科室名查询项目
		if (action.equals("getExaminationProjectByOfficeId")) {
			try {
				int office_id = Integer.parseInt(request.getParameter("office_id"));
				ExaminationProjectDao examinationProjectDao = new ExaminationProjectDao();
				List<ExaminationProject> list = examinationProjectDao
						.getExaminationProjectsByOffice(office_id);
				JSONArray jarray = JSONArray.fromObject(list);
				out.println(jarray.toString());
			} catch (Exception e) {
				out.print("error");
			}
		}
		//添加体检项目
		if(action.equals("addExaminationProject")){
			try {
				int office_id = Integer.parseInt(request.getParameter("office_id"));
				String project_name = request.getParameter("project_name");
				String price = request.getParameter("price");
				String combo_price = request.getParameter("combo_price");
				String physical_feature_id = request.getParameter("physical_feature_id");
				String result = ExaminationProjectDao.addProject(office_id,project_name,price,combo_price,physical_feature_id);
				if(result =="添加失败") {
					out.print("添加失败");
				}
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
				int project_id = Integer.parseInt(request.getParameter("project_id"));
				String project_name = request.getParameter("project_name");
				String price = request.getParameter("price");
				String combo_price = request.getParameter("combo_price");
				String physical_feature_id = request.getParameter("physical_feature_id");
				ExaminationProjectDao.modifyProject(project_id,project_name,price,combo_price,physical_feature_id);
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
				String combo_price = request.getParameter("combo_price");
				String combo_items = request.getParameter("combo_items");
				ComboDao.modifyCombo(id, combo_name,combo_price, combo_items);
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
				String id = request.getParameter("id");
				int office_id = Integer.parseInt(request.getParameter("office_id"));
				String name = request.getParameter("name");
				String position = request.getParameter("position");
				UserDao.modifyEmployee(id, name, position,office_id);
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		if (action.equals("deleteEmployee")) {
			try {
				String id = request.getParameter("id");
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
		if (action.equals("getConclusion")) {
			try {
				ConclusionDao conclusion = new ConclusionDao();
				List<Conclusion> list = conclusion.getConclusion();
				JSONArray jarray = JSONArray.fromObject(list);
				out.println(jarray.toString());	
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		if (action.equals("addConclusion")) {
			try {
				String name = request.getParameter("name");
				String conclusion = request.getParameter("conclusion");
				String explain_disease = request.getParameter("explain_disease");
				String suggestion = request.getParameter("suggestion");
				ConclusionDao.addConclusion(name,
						conclusion,explain_disease,suggestion);
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		if (action.equals("modifyConclusion")) {
			try {
				int id = Integer.parseInt(request.getParameter("id"));
				String name = request.getParameter("name");
				String conclusion = request.getParameter("conclusion");
				String explain_disease = request.getParameter("explain_disease");
				String suggestion = request.getParameter("suggestion");
				ConclusionDao.modifyConclusion(id, name,
						conclusion,explain_disease,suggestion);
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		if (action.equals("deleteConclusion")) {
			try {
				int id = Integer.parseInt(request.getParameter("id"));
				ConclusionDao.deleteConclusion(id);
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		//体征词
		if (action.equals("getphysicalFeature")) {
			try {
				PhysicalFeatureDao physicalFeature = new PhysicalFeatureDao();
				List<PhysicalFeature> list = physicalFeature.getphysicalFeature();
				JSONArray jarray = JSONArray.fromObject(list);
				out.println(jarray.toString());	
			} catch (Exception e) {
				out.print("error");
			}
		}
		if (action.equals("getphysicalFeatureById")) {
			try {
				int id = Integer.parseInt(request.getParameter("id"));
				PhysicalFeatureDao physicalFeature = new PhysicalFeatureDao();
				List<PhysicalFeature> list = physicalFeature.getphysicalFeatureById(id);
				JSONArray jarray = JSONArray.fromObject(list);
				out.println(jarray.toString());	
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		if (action.equals("addphysicalFeature")) {
			try {
				String name = request.getParameter("name");
				String result = request.getParameter("result");
				String operator = request.getParameter("operator");
				String compare_man = request.getParameter("compare_man");
				String compare_woman = request.getParameter("compare_woman");
				PhysicalFeatureDao.addphysicalFeature(name,result,operator,compare_man,compare_woman);
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		if (action.equals("modifyphysicalFeature")) {
			try {
				int id = Integer.parseInt(request.getParameter("id"));
				String name = request.getParameter("name");
				String result = request.getParameter("result");
				String operator = request.getParameter("operator");
				String compare_man = request.getParameter("compare_man");
				String compare_woman = request.getParameter("compare_woman");
				PhysicalFeatureDao.modifyphysicalFeature(id,name,result,operator,compare_man,compare_woman);
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		if (action.equals("deletephysicalFeature")) {
			try {
				int id = Integer.parseInt(request.getParameter("id"));
				PhysicalFeatureDao.deletephysicalFeature(id);
			} catch (Exception e) {
				out.print("error");
			}
		}
		
	}
}
