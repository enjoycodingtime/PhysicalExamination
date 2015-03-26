<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>体检预约</title>
<link href="js/lib/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="js/lib/bootstrap/dist/css/bootstrap-datetimepicker.min.css" rel="stylesheet">
<link href="styles/home.css" rel="stylesheet">
</head>
<body>
<nav class="navbar navbar-inverse">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#"><span class="glyphicon glyphicon-plus"></span>标准体检信息管理系统</a>
          </div>
          <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
              <li class="active"><a href="#">总台</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>
                <ul class="dropdown-menu" role="menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li class="divider"></li>
                  <li class="dropdown-header">Nav header</li>
                  <li><a href="#">Separated link</a></li>
                  <li><a href="#">One more separated link</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
 
  
  <div class="container-fluid">
      <div class="row-fluid">
        <div class="span3">
          <div class="well sidebar-nav">
            <ul class="nav nav-list">
              <li class="nav-header">个人客户</li>
              <li><a href="#">体检预约</a></li>
              <li><a href="#">体检登记</a></li>
              <li><a href="#">资料维护</a></li>
              <li><a href="#">项目更改</a></li>
              <li><a href="#">体检查询</a></li>
              <li class="nav-header">团体客户</li>
              <li><a href="#">体检预约</a></li>
              <li><a href="#">体检登记</a></li>
              <li><a href="#">资料维护</a></li>
              <li><a href="#">项目更改</a></li>
              <li><a href="#">体检查询</a></li>		
           </ul>
          </div><!--/.well -->
        </div><!--/span-->
        <div class="span9">
          <div class="leaderboard">
            <h1>体检预约</h1>
            <form>
            <table class="table-bordered text-center">
            <tr>
            <td>
            姓名
            </td>
           	<td>
   <input type="text" class="form-control" id="" name="name" placeholder="输入姓名">         
            </td>
                      <td>
     性别       
            </td>
           	<td>
            男：<input type="radio" id="" name="sex" value="man">女：<input type="radio" id="" name="sex" value="woman">
            </td>
            </tr>
             <tr>
            <td>
            年龄
            </td>
           	<td>
            <input type="text" class="form-control" name="age" id="" placeholder="输入年龄">
            </td>
            <td>
            联系方式
            </td>
           	<td>
         <input type="text" class="form-control" name="phone_number" id="" placeholder="输入电话">
            </td>
            </tr>
             
             <tr>
            <td>
            预约检查日期
            </td>
           	<td>
        <input type="text" class="form-control" name="date" value="2015-03-25" id="datetimepicker" readonly class="form_datetime">  
            </td>
            </tr>
             <tr>
            <td>
            套餐
            </td>
           	<td>
          <input type="text" class="form-control" id="" placeholder="">  
            </td>
            </tr>
             <tr>
            <td>
         体检项目   
            </td>
           	<td>
          <input type="text" class="form-control" id="" placeholder="">  
            </td>
            </tr>
             
            
            
            
            </table>
            </form>
            <p><a class="btn btn-success btn-large">确认</a></p>
          </div>
          
     <footer>
        <p>&copy; 向莹辉 胡艳灵 张柯</p>
      </footer>
	
	
	<script src="js/lib/jquery.js"></script>
    <script src="js/lib/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="js/lib/bootstrap/dist/js/bootstrap-datetimepicker.min.js"></script>
    <script src="js/reservation.js"></script>
</body>
</html>