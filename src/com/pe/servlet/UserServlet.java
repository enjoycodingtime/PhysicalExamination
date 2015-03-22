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
		if(action.equals("home")){
			try {
				String password =request.getParameter("password");
				String username = request.getParameter("username");
				Users users = UserDao.findByName(username);
				String pwd = ""+users.getPassword();
				if(users!=null&&users.getPassword().equals(password)){
					request.setAttribute("user", users);
					request.getRequestDispatcher("home.jsp").forward(request, response);
				} else {
					request.setAttribute("user_error", "用户名或密码错误");
					request.getRequestDispatcher("index.jsp").forward(request, response);
				}
			} catch (Exception e) {
				out.print("系统繁忙！稍后重试");
			}
			
		}
		if(action.equals("list")){
			try {
				List<Users> list = UserDao.findAll();
				request.setAttribute("list", list);
				request.getRequestDispatcher("page/list.jsp").forward(request, response);
				
			} catch (Exception e) {
				out.print("系统繁忙！");
			}
		}
		
	}
}
