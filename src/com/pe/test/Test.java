package com.pe.test;

import java.util.List;

import com.pe.dao.UserDao;
import com.pe.entity.Users;

public class Test {

	public static void main(String[] args) {
		try {
			
		List<Users> user =UserDao.findAll();
		
			for(Users w:user){
				System.out.println(w);
			}
		
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}
