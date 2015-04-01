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
import com.pe.dao.ReservationDao;
import com.pe.dao.UserDao;
import com.pe.entity.ExaminationProject;
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
		String action =url.substring(url.lastIndexOf("/")+1, url.lastIndexOf("."));
		response.setContentType("text/html;charset=utf-8");
		PrintWriter out = response.getWriter();
		//
		if(action.equals("home")){
			try {
				String password =request.getParameter("password");
				String username = request.getParameter("username");
				String position = request.getParameter("position");
				Users users = UserDao.findByName(username);
				if(users!=null&&users.getPassword().equals(password) && users.getPosition().equals(position)){
					out.println(users);
				} else {
					out.print("error");
				}
			} catch (Exception e) {
				out.print("error");
			}			
		}
		
		//
		if(action.equals("signIn")){
			try {
				String password =request.getParameter("password");
				String username = request.getParameter("username");
				String position = request.getParameter("position");
				UserDao.sign_in(username, password, position);
				
			} catch (Exception e) {
				out.print("error");
			}
			
		}
		
		
		if(action.equals("reservation")){
			try {
				String name =request.getParameter("name");
				String age =request.getParameter("age");
				String sex =request.getParameter("sex");
				String date =request.getParameter("date");
				String phone_number =request.getParameter("phoneNumber");
				String physical_examination =request.getParameter("physicalExamination");
				
				ReservationDao.insertReservation(name,sex,age,phone_number,date,physical_examination);
				
				out.print("ok");
				
			} catch (Exception e) {
				out.print("error");
			}
		}
		//获取预约信息
		if(action.equals("getReservation")){
			try {
				ReservationDao reservationDao = new ReservationDao();
				List<Reservation> list = reservationDao.getReservation();
				JSONArray jarray = JSONArray.fromObject(list);
				out.println(jarray.toString());				
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		//查询预约信息
		if(action.equals("isReservation")){
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
		//获取所有体检项目
		if(action.equals("getExaminationProject")){
			try {
				ExaminationProjectDao examinationProjectDao = new ExaminationProjectDao();
				List<ExaminationProject> list = examinationProjectDao.getExaminationProjects();
				JSONArray jarray = JSONArray.fromObject(list);
				out.println(jarray.toString());				
			} catch (Exception e) {
				out.print("error");
			}
		}
		
		//添加体检套餐
				if(action.equals("addCombo")){
					try {
						String combo_name =request.getParameter("combo_name");
						String combo_items =request.getParameter("combo_items");
						ComboDao.addCombo(combo_name, combo_items);
					} catch (Exception e) {
						out.print("error");
					}
				}
	}
}
