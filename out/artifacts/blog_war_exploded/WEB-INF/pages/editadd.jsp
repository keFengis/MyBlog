<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="C" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<html lang="zh">

<head>
    <meta charset="utf-8"/>
    <title>编辑或添加</title>
    <link rel="stylesheet" href="/css/mdstyle.css"/>
    <link rel="stylesheet" href="/css/editormd.css"/>
</head>

<body>
<div id="layout">
    <br>
    <div style="text-align: center">
        <textarea name="title" id="title" cols="30" rows="1" value="${post.title}">${post.title}</textarea>
    </div>
    <div id="test-editormd">
        <textarea style="display:none;" id="main"></textarea>
    </div>
    <input type="hidden" name="delState" id="delState" value="${post.delstate}"/>
    <input type="hidden" id="editState" value="${editState}"/>
    <input type="hidden" id="bk" value="${bk}"/>
    <div style="text-align: center">
        <c:if test="${!(bk eq 1)}">
            <c:forEach items="${classList}" var="item">
                <label id="type">
                    <input name="type" type="radio" value="${item.classcode}"/>${item.classname} </label>
            </c:forEach>
        </c:if>
        <br>
        <br>
        <button onclick="submit()">提交!</button>
    </div>
</div>
</body>
<script src="/js/jquery.min.js"></script>
<script src="/js/editormd.min.js"></script>
<script type="text/javascript">
    var testEditor = editormd("test-editormd", {
        width: "90%",
        height: 800,
        path: "/js/lib/",
        saveHTMLToTextarea: true
    });

    function submit() {
        if ($("#editState").val() == '1') {
            ttype = $("#bk").val() == '1' ? 2500 : $("input:radio:checked").val();
            $.post("/update/${post.id}", {
                content: testEditor.getMarkdown(),
                user: 0,
                type: ttype,
                title: $("#title").val(),
                author: '0',
                delState: $("#delState").val()
            }, function (data, state) {
                window.location = '/admin/';
            })
        } else {
            $.post("/save", {
                content: testEditor.getMarkdown(),
                user: 0,
                type: $("input:radio:checked").val(),
                title: $("#title").val(),
                author: '0',
                delState: $("#delState").val()
            }, function (data, state) {
                window.location = '/admin/';
            })
        }
    }
</script>
<script>
    $(function () {
        $.get("/content/${post.id}", function (data, status) {
            $("#main").text(data);
        });
    });
</script>

</html>