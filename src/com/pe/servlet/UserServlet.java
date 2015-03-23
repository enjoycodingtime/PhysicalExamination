package com.pe.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.pe.dao.UserDao;
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
		//��½
		if(action.equals("home")){
			try {
				String password =request.getParameter("password");
				String username = request.getParameter("username");
				String position = request.getParameter("position");
				Users users = UserDao.findByName(username);
				if(users!=null&&users.getPassword().equals(password) && users.getPosition().equals(position)){
					request.setAttribute("user", users);
					if(users.getPosition().equals("receptionist")) {
						request.getRequestDispatcher("home_receptionist.jsp").forward(request, response);
					}
					if( users.getPosition().equals( "doctor")) {
						request.getRequestDispatcher("home_doctor.jsp").forward(request, response);
					}
					if( users.getPosition().equals("manage")) {
						request.getRequestDispatcher("home_manage.jsp").forward(request, response);
					}
					if( users.getPosition().equals("admin")) {
						request.getRequestDispatcher("home_admin.jsp").forward(request, response);
					}
					else{
						request.getRequestDispatcher("home.jsp").forward(request, response);
					}
					
				} else {
					System.out.println("�������");
					System.out.println(username);
					System.out.println(password);
					System.out.println(users);
					request.setAttribute("user_error", "�û������������");
					request.getRequestDispatcher("index.jsp").forward(request, response);
				}
			} catch (Exception e) {
				out.print("ϵͳ��æ���Ժ�����");
			}			
		}
		
		//ע��
		if(action.equals("sign_in")){
			try {
				String password =request.getParameter("password");
				String username = request.getParameter("username");
				String position = request.getParameter("position");
				UserDao.sign_in(username, password, position);
				request.getRequestDispatcher("index.jsp").forward(request, response);
				
			} catch (Exception e) {
				out.print("ϵͳ��æ���Ժ�����");
			}
			
		}
		
		
		if(action.equals("list")){
			try {
				List<Users> list = UserDao.findAll();
				request.setAttribute("list", list);
				request.getRequestDispatcher("page/list.jsp").forward(request, response);
				
			} catch (Exception e) {
				out.print("ϵͳ��æ��");
			}
		}
		
	}
}
