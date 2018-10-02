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
    <title>添加种类</title>
</head>

<body>
<form action="/saveclass" method="post">
    名称：
    <input type="text" name="name">
    <br> 代号：(不要重复！！)
    <input type="submit" value="ok">
</form>
</body>

</html>