<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>

<head>
    <title>管理界面</title>
</head>

<body>
<h2>文章管理</h2>
<a href="/add">新建</a>
<br>
<table>
    <tr>
        <th>id</th>
        <th>标题</th>
        <th>时间</th>
        <th>类型</th>
        <th>操作</th>
    </tr>
    <c:forEach items="${postList}" var="post">
        <tr>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.date}</td>
            <td>${post.type}</td>
            <td>
                <a href="/edit/${post.id}"> 编辑</a>-
                <a href="/delpost/${post.id}">删除</a>
            </td>
        </tr>
    </c:forEach>
</table>
<h2>分类管理</h2>
<a href="/addclass">新建</a>
<br>
<table>
    <tr>
        <th>id</th>
        <th>分类名称</th>
        <th>时间</th>
        <th>分类代号</th>
        <th>操作</th>
    </tr>
    <c:forEach items="${classList}" var="post">
        <tr>
            <td>${post.id}</td>
            <td>${post.classname}</td>
            <td>${post.classaddtime}</td>
            <td>${post.classcode}</td>
            <td>
                <a href="/delclass/${post.id}">删除</a>
            </td>
        </tr>
    </c:forEach>
</table>
<h2>评论管理</h2>
<table>
    <tr>
        <th>id</th>
        <th>评论人</th>
        <th>评论文章id</th>
        <th>评论内容</th>
        <th>电子邮件</th>
        <th>电子网站</th>
        <th>操作</th>
    </tr>
    <c:forEach items="${commentList}" var="post">
        <tr>
            <td>${post.id}</td>
            <td>${post.user}</td>
            <td>${post.postid}</td>
            <td>${post.body}</td>
            <td>${post.email}</td>
            <td>${post.site}</td>
            <td>
                <a href="/delcomment/${post.id}">删除</a>
            </td>
        </tr>
    </c:forEach>
</table>
<h2>关于页面</h2>
<a href="/editabout">编辑这个页面</a>
<br>
<h2>友链管理</h2>
<a href="/editlink">编辑这个页面</a>
<br>
</body>

</html>