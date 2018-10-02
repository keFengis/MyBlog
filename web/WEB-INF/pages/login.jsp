<%--
  Created by IntelliJ IDEA.
  User: kk
  Date: 2018/1/14
  Time: 16:33
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>

<head>
    <title>请登录</title>
</head>

<body>
<form action="/admin" method="post">
    姓名：
    <input type="text" name="user">
    <br> 密码
    <input type="password" name="pwd">
    <br>
    <input type="submit" value="ok">
</form>
</body>

</html>