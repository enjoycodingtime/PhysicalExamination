<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Login</title>
<link href="js/lib/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
<link href = "styles/login.css" rel = "stylesheet">
</head>
<body>
<div class="container">
		<form action="home.com" method="post">	
        <section class="loginBox row-fluid">
          <section class="span7 left">
          	<h1>标准体检信息管理系统</h1>
            <h2>用户登录</h2>
            <p><input type="text" name="username" placeholder="Name"/></p>
            <p><input type="text" name="password" placeholder="Password"/></p>
            <p>
            	<input type="radio" name="position" value="receptionist"/>前台
            	<input type="radio" name="position" value="doctor"/>医生
            	<input type="radio" name="position" value="manage"/>领导
            	<input type="radio" name="position" value="admin"/>管理            	
            </p>
            
            <section class="row-fluid">
              <section class="span8 lh30"><label><input type="checkbox" name="rememberme" />下次自动登录</label></section>
          <section class="span1"><input type="submit" value=" 登录 " class="btn btn-primary">
          <button type="button" class="span1 btn btn-primary" id="sign_in">注册</button>
          </section>
        </section>
        </section></form>
    	
    </div>
    
 	<script src="js/lib/jquery.js"></script>
    <script src="js/lib/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="js/index.js"></script>
</body>
</html>