<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<html lang="zh-CN">

<head>
    <meta charset="UTF-8"/>
    <link rel="shortcut icon" href="/image/favicon.ico">
    <title> 分类汇总 </title>
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
    <link rel="stylesheet" href="/css/1.css">
    <link rel="stylesheet" href="/css/2.css">
    <link rel="stylesheet" href="/css/3.css">
    <link rel="stylesheet" href="/css/mdstyle.css"/>
    <link rel="stylesheet" href="/css/editormd.css"/>
</head>

<body id="menu">
<form method="GET" action="/search" role="search" class="js-search search-form search-form--modal">
    <div class="search-form__inner">
        <div>
            <p class="micro mb-"> 输入后按回车搜索 ...</p>
            <a id="soux" href="" data-instant>
                <i class="icon-search"></i>
            </a>
            <input id="keyword" class="text-input" type="search" name="keyword" placeholder="Search" required="">
        </div>
    </div>
    <div class="search_close" onclick="$.Close()"></div>
</form>
<sidebar id="sidebar">
    <a href="/index">
        <div class="tx">
            <img class="b-lazy" src="/image/ban.jpg" data-src="/image/ban.jpg" itemprop="image" data-no-instant>
            <span> 举个栗子 </span>
        </div>
    </a>
    <ul class="cd">
        <li>
            <a class="" href="/index" title=" 主页 ">
                <i class="iconfont icon-quan"></i>
                <span> 主页 </span>
            </a>
        </li>
        <li>
            <a class="" href="/categories" title=" 分类 ">
                <i class="iconfont icon-kongxing"></i>
                <span> 分类 </span>
            </a>
        </li>
        <li>
            <a class="" href="/history" title=" 归档 ">
                <i class="iconfont icon-openwj"></i>
                <span> 归档 </span>
            </a>
        </li>
        <li>
            <a class="" href="/link" title=" 友链 ">
                <i class="iconfont icon-aite"></i>
                <span> 友链 </span>
            </a>
        </li>
        <li>
            <a class="" href="/about" title=" 关于 ">
                <i class="iconfont icon-wo"></i>
                <span> 关于 </span>
            </a>
        </li>
    </ul>
    <ul class="cd minx">
        <li class="maxico">
            <a class="inline" rel="nofollow" target="_blank" href="https://github.com/keFengis">
                <i class="iconfont icon-github"></i>
            </a>
            <a class="inline" rel="nofollow" target="_blank" href="">
                <i class="iconfont icon-weibo"></i>
            </a>
            <a class="inline" target="_blank" href="">
                <i class="iconfont icon-rss"></i>
            </a>
            <a class="inline" id="sousuo" onclick="$.Sousuo()">
                <i class="iconfont icon-search"></i>
            </a>
        </li>
    </ul>
</sidebar>
<div id="header" class="header">
    <div class="sjcd" onclick="$.Menu()">
        <i></i>
    </div>
    <h1>
        <a href="/index">举个栗子</a>
    </h1>
    <a class="me" href="/about">
        <img class="b-lazy" src="/image/ban.jpg" data-src="/image/ban.jpg" itemprop="image" data-no-instant>
    </a>
</div>
<div class="bug">
    <div id="bug">
        <div id="main" class="main">
            <article>
                <div id="post" class="post">
                    <h1 class="title"> 分类汇总</h1>
                    <div class="meta">
                    </div>
                    <div class="content">
                        <div class="tags">
                            <section>
                                <c:forEach items="${types}" var="item">
                                    <a href="/classify/${item.code}"> ${item.classname}&nbsp;[${item.num}]
                                    </a>
                                </c:forEach>
                            </section>
                        </div>
                        <c:forEach items="${classList}" var="item">
                            <div class="archive box">
                                <h4 class="archive-title">
                                    <a href="/classify/${item.classcode}" class="guidang"
                                       id="posts-list-rec-ads">${item.classname}</a>
                                </h4>
                                <ul class="archive-posts archive-month">
                                    <c:forEach items="${postList}" var="post">
                                        <c:if test="${post.type eq item.classcode}">
                                            <li class="archive-day">
                                                <a class="guidang" href=" /archives/${post.id}">${post.title}</a>
                                                <span class="date">${fn:substring(post.date, 0, 10)}</span>
                                            </li>
                                        </c:if>
                                    </c:forEach>
                                </ul>
                            </div>
                        </c:forEach>
                    </div>
                </div>
            </article>
            <footer id="footer" class="footer">
                © 2018&nbsp;举个栗子.Theme by YoDu&nbsp;
                <br>
            </footer>
        </div>
    </div>
</div>

</body>
<script src="/js/1.js" data-no-instant></script>
<script src="/js/2.js" type="text/javascript"></script>
<script src="/js/3.js" data-no-instant></script>
<script src="/js/4.js" data-no-instant></script>
<script src="/js/5.js" data-no-instant></script>
<script src="/js/6.js" data-no-instant></script>
<script src="/js/7.js" data-no-instant></script>
<script src="/js/8.js" data-no-instant></script>
</html>